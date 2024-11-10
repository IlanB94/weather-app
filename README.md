# Weather Dashboard

A simple weather dashboard application that allows users to get real-time weather information for a specified city. The project is built with a Node.js backend and an Nginx frontend, packaged with Docker for easy deployment.

## Project Structure

- **Backend**: A Node.js Express server that fetches weather data from the OpenWeatherMap API.
- **Frontend**: A simple HTML/CSS/JavaScript frontend served by Nginx that allows users to enter a city name and view the weather information.

## Prerequisites

- Docker and Docker Compose should be installed on your machine.

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/IlanB94/weather-app.git
cd weather-dashboard
```

### 2. Set Up Environment Variable
Replace **YOUR_API_KEY** in the docker-compose.yml file with your actual API key from [OpenWeatherMap](https://openweathermap.org/):

```
services:
  backend:
    build: ./backend
    environment:
      - WEATHER_API_KEY=YOUR_API_KEY
    ports:
      - "3000:3000"
  frontend:
    build: ./frontend
    ports:
      - "8080:80"
```

### 3. Run the Application
Use Docker Compose to build and run the containers:
```
docker-compose up --build
```
This command will:
* Build Docker images for the backend and frontend services.
* Run the backend on port 3000 and the frontend on port 8080.

### 4. Access the Application
Once the containers are running, open your browser and go to http://localhost:8080 to use the Weather Dashboard.

### Commands Build and Run Containers

## Build and Run Containers
```
docker-compose up --build
```

## Stop Containers
```
docker-compose down
```

## View Running Containers
```
docker ps
```

### Technologies Used
* Node.js & Express
* Nginx
* Docker & Docker Compose
