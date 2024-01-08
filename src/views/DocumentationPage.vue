<template>
  <div class="documentation-layout">
    <!-- Main Content -->
    <div class="documentation-page container">
    <h1 class="my-4">Documentation - FireTrack</h1>

    <!-- About Section -->
    <section id="about" class="my-4">
      <h2>About</h2>
      <p>FireTrack is an integrated wildfire management system designed to assist in the monitoring, early detection, and efficient response to wildfires. Developed by rabeezarre, the project encompasses both frontend and backend components and uses a variety of technologies including Spring Boot, Java 17, Gradle, Vue.js, SCSS, and Bootstrap.</p>
      <h3>Features</h3>
      <ul>
        <li>Real-time monitoring of forest conditions.</li>
        <li>Tracking points inspections in the forest using mobile devices.</li>
        <li>Timely emergency alerts for rapid response to wildfire incidents.</li>
      </ul>
      <h3>Sub-Systems</h3>
      <ul>
        <li><strong>Web</strong>: Interactive map displaying tracking points information.</li>
        <li><strong>Mobile</strong>: Tracking service for marking checked tracking points in real-time.</li>
        <li><strong>Backend</strong>: Centralized database for web and mobile interfaces, built with Spring Boot using Java 17 and Gradle.</li>
        <li><strong>Embedded Programming</strong>: Utilizes LoRaWAN protocol for scalable data sharing.</li>
      </ul>
    </section>

    <!-- Deployment Section -->
    <section id="deployment" class="my-4">
      <h2>Deployment</h2>
      <p>FireTrack is deployed on CleverCloud. Access the live application here: <a href="https://firetrack.cleverapps.io/" target="_blank">firetrack.cleverapps.io</a></p>
    </section>

    <!-- Technology Stack Section -->
    <section id="technology-stack" class="my-4">
      <h2>Technology Stack</h2>
      <ul>
        <li>Backend: Java 17, Spring Boot, Gradle</li>
        <li>Frontend: Vue.js, SCSS, Bootstrap</li>
        <li>Database: H2 Database</li>
        <li>API Documentation: Swagger</li>
      </ul>
    </section>

    <!-- Installation and Setup Section -->
    <section id="installation-and-setup" class="my-4">
      <h2>Installation and Setup</h2>
      <h3>Backend</h3>
      <ol>
        <li>Clone the backend repository: <code>git clone https://github.com/rabeezarre/firetrack-backend.git</code></li>
        <li>Navigate to the project directory: <code>cd firetrack-backend</code></li>
        <li>Build the project using Gradle: <code>./gradlew build</code></li>
        <li>The backend uses the build version of the frontend. To redeploy, add the build files to <code>src/main/resources/static</code>.</li>
      </ol>
      <h3>Frontend</h3>
      <ol>
        <li>Clone the frontend repository: <code>git clone https://github.com/rabeezarre/firetrack-frontend.git</code></li>
        <li>Navigate to the project directory: <code>cd firetrack-frontend</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>To compile and hot-reload for development: <code>npm run serve</code></li>
        <li>To compile and minify for production: <code>npm run build</code></li>
        <li>To lint and fix files: <code>npm run lint</code></li>
        <li>After building for production, copy the build files to the backend's <code>src/main/resources/static</code> directory.</li>
      </ol>
    </section>

    <!-- Usage Section -->
    <section id="usage" class="my-4">
      <h2>Usage</h2>
      <p>FireTrack provides various RESTful API endpoints:</p>

      <h3>User Controller</h3>
      <ul>
        <li><strong>GET</strong> <code>/api/users/{userId}</code>: Retrieve user details by user ID.</li>
        <li><strong>PUT</strong> <code>/api/users/{userId}</code>: Update user details.</li>
        <li><strong>DELETE</strong> <code>/api/users/{userId}</code>: Delete a user.</li>
        <li><strong>POST</strong> <code>/api/users/register</code>: Register a new user.</li>
        <li><strong>POST</strong> <code>/api/users/login</code>: User login.</li>
      </ul>

      <h3>Tracking Point Controller</h3>
      <ul>
        <li><strong>GET</strong> <code>/api/trackingPoints/{pointId}</code>: Get details of a specific tracking point.</li>
        <li><strong>PUT</strong> <code>/api/trackingPoints/{pointId}</code>: Update a tracking point.</li>
        <li><strong>DELETE</strong> <code>/api/trackingPoints/{pointId}</code>: Delete a tracking point.</li>
        <li><strong>GET</strong> <code>/api/trackingPoints</code>: Retrieve all tracking points.</li>
        <li><strong>POST</strong> <code>/api/trackingPoints</code>: Create a new tracking point.</li>
      </ul>

      <h3>Alert Controller</h3>
      <ul>
        <li><strong>PUT</strong> <code>/api/alerts/{alertId}</code>: Update an alert.</li>
        <li><strong>GET</strong> <code>/api/alerts</code>: Get all alerts.</li>
        <li><strong>POST</strong> <code>/api/alerts</code>: Create a new alert.</li>
        <li><strong>GET</strong> <code>/api/alerts/trackingPoint/{pointId}</code>: Get alerts for a specific tracking point.</li>
        <li><strong>GET</strong> <code>/api/alerts/active</code>: Retrieve active alerts.</li>
      </ul>

      <h3>Sensor Data Controller</h3>
      <ul>
        <li><strong>POST</strong> <code>/api/sensorData</code>: Submit new sensor data.</li>
        <li><strong>GET</strong> <code>/api/sensorData/{pointId}</code>: Retrieve sensor data for a specific point.</li>
      </ul>

      <h3>Scanning History Controller</h3>
      <ul>
        <li><strong>GET</strong> <code>/api/scanningHistory</code>: Get all scanning history records.</li>
        <li><strong>POST</strong> <code>/api/scanningHistory</code>: Create a new scanning history record.</li>
        <li><strong>GET</strong> <code>/api/scanningHistory/user/{userId}</code>: Get scanning history by user.</li>
        <li><strong>GET</strong> <code>/api/scanningHistory/point/{pointId}</code>: Get scanning history for a specific point.</li>
      </ul>
    </section>

    <!-- Contributing Section -->
    <section id="contributing" class="my-4">
      <h2>Contributing</h2>
      <p>Here are some ways you can contribute:</p>

      <ol>
        <li><strong>Reporting Bugs</strong></li>
        <li><strong>Suggesting Enhancements</strong></li>
        <li><strong>Submitting Pull Requests</strong></li>
        <li><strong>Code Reviews</strong></li>
        <li><strong>Documentation</strong></li>
      </ol>

      <h3>Contribution Guidelines</h3>
      <ul>
        <li>Respect the code of conduct.</li>
        <li>Before starting work on a significant change, please open an issue for discussion.</li>
        <li>Keep the changes small and focused; larger changes are harder to review and merge.</li>
      </ul>
    </section>

    <!-- License Section -->
    <section id="license" class="my-4">
      <h2>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </section>

    <!-- Authors and Acknowledgment Section -->
    <section id="authors-and-acknowledgment" class="my-4">
      <h2>Authors and Acknowledgment</h2>
      <p>Author: rabeezarre <a href="https://github.com/rabeezarre" target="_blank">GitHub user</a></p>
      <p>For more details and updates, please refer to the <a href="https://github.com/rabeezarre/firetrack-backend" target="_blank">backend repository</a> and the <a href="https://github.com/rabeezarre/firetrack-frontend" target="_blank">frontend repository</a> on GitHub.</p>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationPage'
}
</script>

<style scoped>
.documentation-layout {
  display: flex;
}

.documentation-page {
  padding: 20px;
}
</style>


