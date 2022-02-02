require('dotenv').config();
const express = require('express');
const app = express();
const { setupRoutes } = require('./routes');

const { SERVER_PORT } = process.env;

setupRoutes(app);

app.use(express.json());

// server setup
const server = app.listen(SERVER_PORT, () => {
  console.log(` 📢 Server running on port ${SERVER_PORT}`);
});