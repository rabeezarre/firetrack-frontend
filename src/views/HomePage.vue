<template>
  <div class="container">
    <h1 class="mt-4">FireTrack - Wildfire Management System</h1>
    <p>
      This system is designed to help manage wildfires with a focus on monitoring, early detection, and efficient
      response.
    </p>
    <h2 class="mt-4">Features</h2>
    <ul>
      <li>Real-time monitoring of forest conditions.</li>
      <li>Tracking points inspections in the forest using mobile devices.</li>
      <li>Timely emergency alerts for rapid response to wildfire incidents.</li>
      <li>Fire spread projection for effective containment strategies.</li>
    </ul>
    <h2 class="mt-4">Sub-Systems</h2>
    <ul>
      <li><strong>Web:</strong> Interactive map displaying tracking points information.</li>
      <li><strong>Mobile:</strong> Tracking service for marking checked tracking points in real-time.</li>
      <li><strong>Backend:</strong> Centralized database for web and mobile interfaces.</li>
      <li><strong>Embedded Programming:</strong> Utilizes LoRaWAN protocol for scalable data sharing.</li>
    </ul>
    <h2 class="mt-4">Other</h2>
    <p>
      You can find full documentation on this page:
      <router-link to="/docs">Documentation Page</router-link>
    </p>
    <p>
      You can find Javadoc on this page:
      <a href="https://rabeezarre.github.io/firetrack/">Javadoc</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
}

.display-4 {
  font-size: 2.5rem;
}

.mt-5 {
  margin-top: 3rem;
}
</style>
