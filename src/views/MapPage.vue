<template>
  <div class="container mt-4">
    <h1>Interactive Map</h1>
    <div id="map" class="leaflet-map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import markerIcon from "@/assets/icons/marker.svg";

export default {
  name: "MapPage",
  data() {
    return {
      map: null,
      trackingPoints: [], // Store tracking points data
      customMarkerIcon: L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32], // Customize the icon size
        iconAnchor: [16, 32], // Customize the icon anchor
        popupAnchor: [0, -32], // Customize the popup anchor
      }),
    };
  },
  mounted() {
    // Initialize the map
    this.map = L.map("map").setView([0, 0], 2); // Set initial view and zoom level

    // Add a tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Fetch tracking points data
    this.fetchTrackingPoints();
  },
  methods: {
    async fetchTrackingPoints() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/trackingPoints`);
        this.trackingPoints = response.data;

        // Add custom markers for each tracking point
        this.addMarkers();

        // Zoom to fit all markers
        this.map.fitBounds(this.getMarkersBounds());
      } catch (error) {
        console.error('Error fetching tracking points:', error);
      }
    },
    addMarkers() {
      // Iterate through tracking points and add custom markers
      this.trackingPoints.forEach((point) => {
        const marker = L.marker([point.latitude, point.longitude], {
          icon: this.customMarkerIcon,
        }).addTo(this.map);

        // Customize the marker popup content
        const popupContent = `<strong>Point ID:</strong> ${point.pointId}<br>
                              <strong>Status:</strong> ${point.status}`;
        marker.bindPopup(popupContent);
      });
    },
    getMarkersBounds() {
      // Create a LatLngBounds object to store the bounds of all markers
      const bounds = L.latLngBounds();

      // Iterate through tracking points and extend the bounds for each marker
      this.trackingPoints.forEach((point) => {
        bounds.extend([point.latitude, point.longitude]);
      });

      return bounds;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
}

.leaflet-map {
  height: 500px;
}
</style>
