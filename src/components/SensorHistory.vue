<template>
  <div class="sensor-history mt-4">
    <h3>Sensor Data History for Point ID: {{ pointId }}</h3>
    <table class="table table-hover table-light">
      <thead>
      <tr>
        <th class="table-secondary">Timestamp</th>
        <th>Temperature</th>
        <th>Humidity</th>
        <th>Pressure</th>
        <th>Altitude</th>
        <th>Magnetometer</th>
        <th>Sound</th>
        <th>Colour</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in displayedSensorData" :key="data.dataId">
        <td class="table-secondary">{{ formatDate(data.timestamp) }}</td>
        <td>{{ data.temperature }}</td>
        <td>{{ data.humidity }}</td>
        <td>{{ data.pressure }}</td>
        <td>{{ data.altitude }}</td>
        <td>{{ data.magnetometer }}</td>
        <td>{{ data.sound }}</td>
        <td>{{ data.colour }}</td>
      </tr>
      </tbody>
    </table>
    <button v-if="displayedSensorData.length < sensorData.length" class="btn btn-primary" @click="showMore">Show More</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SensorHistory',
  props: {
    pointId: Number
  },
  data() {
    return {
      sensorData: [],
      limit: 5
    };
  },
  computed: {
    displayedSensorData() {
      return this.sensorData.slice(0, this.limit);
    }
  },
  watch: {
    pointId(newVal) {
      this.fetchSensorData(newVal);
    }
  },
  methods: {
    async fetchSensorData(pointId) {
      try {
        const response = await axios.get(`http://firetrack.cleverapps.io/api/sensorData/${pointId}`);
        this.sensorData = response.data.reverse();
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    },
    showMore() {
      this.limit += 5;
    },
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleString();
    }
  },
  mounted() {
    this.fetchSensorData(this.pointId);
  },
};
</script>
