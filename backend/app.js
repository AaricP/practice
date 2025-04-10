// Import NPM libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routers
const homeRouter = require('./routers/home-router');

// Import app
const app = express();

// Use CORS middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // this is the client's port
  })
);

// Handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for POST forms

// Register routes
app.use('/home', homeRouter);

// save db url in const
const MONGODB_URI =
  'mongodb+srv://dbo:aggies@cluster0.9pit9.mongodb.net/IS3600_FinalProject?retryWrites=true&w=majority&appName=Cluster0';

// Connect to db
mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log('Connected to database!');
    // Launch the app
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
