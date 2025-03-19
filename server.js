require("dotenv").config(); // Load environment variables
const express = require('express');
const connectDB = require("./data/database");
const app = express();
const bodyParser = require('body-parser');
const { swaggerUi, swaggerSpec } = require('./swagger');
const studentRoutes = require('./routes/studentRoutes');

const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve Swagger JSON
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/student', studentRoutes);

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
  });
}).catch(err => {
  console.error("Failed to connect to the database", err);
});