const express = require('express');
const app = express();

// Use the PORT environment variable provided by the host, default to 3000
// Note: Render will automatically inject a value for PORT
const PORT = process.env.PORT || 3000;

// GET / route
app.get('/', (req, res) => {
  res.send('Application Deployed Successfully');
});

// GET /status route
app.get('/status', (req, res) => {
  res.json({
    status: "running",
    environment: process.env.NODE_ENV || "development"
  });
});

// Binding to '0.0.0.0' is a common requirement for cloud deployments
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});const express = require('express');
const app = express();

// Render sets the PORT environment variable. 10000 is common for Render.
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.status(200).send('Application Deployed Successfully');
});

app.get('/status', (req, res) => {
  res.status(200).json({
    status: "running",
    environment: process.env.NODE_ENV || "production"
  });
});

// Use 0.0.0.0 to ensure it listens on the network interface Render expects
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is successfully running on port ${PORT}`);
});