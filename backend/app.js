const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sequelize } = require('./config/db');

// Route files
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:3001', // Allow only this frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow sending credentials (cookies, Authorization headers)
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Store Rating System API is running...');
});

// Database connection
sequelize
  .authenticate()
  .then(async () => {
    console.log('Database connected successfully.');

    // Sync all models to the DB (create tables if they don't exist)
    await sequelize.sync({ force: true }); // OR use { force: true } to recreate tables every time

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
