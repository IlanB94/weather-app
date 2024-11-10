const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Read API key from Docker secret or environment variable
let apiKey;
try {
  apiKey = fs.readFileSync('/run/secrets/weather_api_key', 'utf-8').trim();
} catch (error) {
  apiKey = process.env.WEATHER_API_KEY;
}

app.use(cors());

app.get('/weather', async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
