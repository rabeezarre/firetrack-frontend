<template>
  <div class="container">
    <h1 class="mt-4">FireTrack - Wildfire Management System</h1>
    <p class="lead">
      This system is designed to help manage wildfires with a focus on monitoring, early detection, and efficient
      response.
    </p>
    <h2 class="mt-4">Features</h2>
    <ul>
      <li>Real-time monitoring of forest conditions through the website and sensors.</li>
      <li>Tracking points and inspections in the forest using mobile devices and barcode scanning.</li>
      <li>Timely emergency alerts through web and mobile apps for rapid response to wildfire incidents.</li>
      <li>Fire spread projection for effective containment strategies.</li>
    </ul>
    <h2 class="mt-4">Sub-Systems</h2>
    <ul>
      <li><strong>Web:</strong> Interactive map displaying forest details and tracking points information.</li>
      <li><strong>Mobile:</strong> Tracking service for marking checked tracking points in real-time.</li>
      <li><strong>Backend:</strong> Centralized database for web and mobile interfaces.</li>
      <li><strong>Embedded Programming:</strong> Utilizes LoRaWAN protocol for scalable data sharing.</li>
    </ul>
    <h2 class="mt-4">Next Steps</h2>
    <p>
      In the future, we plan to enhance the system with advanced features like predictive modeling and AI-driven fire
      spread projection.
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

.lead {
  font-size: 1.25rem;
}

.mt-5 {
  margin-top: 3rem;
}
</style>
