<template>
  <div class="container mt-4">
    <h1>Interactive Map</h1>
    <div id="map" class="leaflet-map"></div>
    <SensorHistory v-if="showHistory" :pointId="selectedPointId"></SensorHistory>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import markerIcon from "@/assets/icons/marker.svg";
import SensorHistory from '/src/components/SensorHistory.vue';

export default {
  name: "MapPage",
  components: {
    SensorHistory
  },
  data() {
    return {
      map: null,
      trackingPoints: [],
      customMarkerIcon: L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      }),
      showHistory: false,
      selectedPointId: null,
    };
  },
  mounted() {
    this.initMap();
    this.fetchTrackingPoints();
  },
  methods: {
    initMap() {
      this.map = L.map("map", {
        scrollWheelZoom: false,
      }).setView([0, 0], 2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.map.on('popupopen', (e) => {
        e.popup._container.addEventListener('show-history', this.showPointHistory);
      });
    },
    async fetchTrackingPoints() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/trackingPoints`);
        this.trackingPoints = response.data;
        this.addMarkers();
        this.map.fitBounds(this.getMarkersBounds());
      } catch (error) {
        console.error('Error fetching tracking points:', error);
      }
    },
    addMarkers() {
      this.trackingPoints.forEach((point) => {
        const marker = L.marker([point.latitude, point.longitude], { icon: this.customMarkerIcon }).addTo(this.map);
        const popupContent = `<div>
                                <strong>Point ID:</strong> ${point.pointId}<br>
                                <strong>Status:</strong> ${point.status}<br>
                                <button class="btn btn-secondary btn-sm" onclick="this.dispatchEvent(new CustomEvent('show-history', { detail: ${point.pointId}, bubbles: true }))">Show History</button>
                              </div>`;
        marker.bindPopup(popupContent);
      });
    },
    showPointHistory(event) {
      this.selectedPointId = event.detail;
      this.showHistory = true;
      this.$nextTick(() => {
        const historyEl = this.$el.querySelector('.sensor-history');
        if (historyEl) {
          historyEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    getMarkersBounds() {
      const bounds = L.latLngBounds();
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
