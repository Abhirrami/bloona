const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database'); // Sequelize connection
const donorRoutes = require('./routes/authDonorRoutes');
const hospitalRoutes = require('./routes/authHospitalRoutes'); // Optional: only if you create this

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/donor', donorRoutes);           // Handles /api/donor/login, /register
app.use('/api/hospital', hospitalRoutes);     // Handles /api/hospital/login, /register (optional)

// Health Check
app.get('/', (req, res) => {
  res.send('🚀 Bloona backend is up and running!');
});

// Sync DB and start server
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }) // Sync models with DB
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to sync database:', err);
  });
