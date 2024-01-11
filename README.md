# FireTrack Mobile Application

## FireTrack - Wildfire Management System

FireTrack's frontend is an integral part of the Wildfire Management System, designed to enhance the monitoring, early detection, and response to wildfires.

### Demonstration
Deployed version can be accessed via link: https://firetrack.cleverapps.io/ 

### Overview

The FireTrack frontend provides an interactive web interface for real-time monitoring of forest conditions and wildfire management. It is a central hub where workers can log in, view their profile, scanning history, and interact with the tracking points on the map.

### Features

- **Interactive Map**: Display tracking points and sensor data history.
- **Real-time Monitoring**: View forest conditions and wildfire updates in real-time.
- **User Profile**: Workers can view their scanning history and account details.
- **Documentation**: Access overall information about the website and its functionalities.

### Technology Stack

- **Framework**: Vue.js
- **Styling**: Bootstrap and SCSS

### Project Setup and Usage

#### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rabeezarre/firetrack-frontend.git
   ```
2. **Navigate to Project Directory**:
   ```bash
   cd firetrack-frontend
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

#### Development and Production

- **For Development**:
  ```bash
  npm run serve
  ```
  This command compiles and hot-reloads the project for development purposes.

- **For Production**:
  ```bash
  npm run build
  ```
  Compiles and minifies the project for production.

- **Lint and Fix Files**:
  ```bash
  npm run lint
  ```

### Deployment

Backend URL and ports can be changed as needed. After building the project for production, ensure to copy the build files to the backend's `src/main/resources/static` directory for deployment.

### Other Sub-Systems

- [**Frontend**](https://github.com/rabeezarre/firetrack-frontend): Interactive map displaying tracking points information.
- [**Backend**](https://github.com/rabeezarre/firetrack): Centralized database for web and mobile interfaces, built with Spring Boot using Java 17 and Gradle.
- [**Embedded Programming**](https://github.com/rabeezarre/firetrack-embed): Utilizes LoRaWAN protocol for scalable data sharing.

### Authors and Acknowledgment

- Author: rabeezarre ([GitHub Profile](https://github.com/rabeezarre))
