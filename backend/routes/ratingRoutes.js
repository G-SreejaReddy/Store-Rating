const express = require('express');
const Rating = require('../models/Rating');
const User = require('../models/User');
const Store = require('../models/Store');
const { authenticate } = require('../middlewares/authMiddleware'); // authentication middleware

const router = express.Router();

// Get ratings for a specific store
router.get('/:storeId', async (req, res) => {
  const { storeId } = req.params;

  try {
    const ratings = await Rating.findAll({ where: { storeId } });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ratings' });
  }
});

// Add a rating for a store
router.post('/:storeId', authenticate, async (req, res) => {
  const { storeId } = req.params;
  const { rating, comment } = req.body;
  const userId = req.user.userId; // from JWT

  try {
    const store = await Store.findByPk(storeId);
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    const newRating = await Rating.create({
      rating,
      comment,
      storeId,
      userId
    });

    res.status(201).json({ message: 'Rating submitted successfully', newRating });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting rating' });
  }
});

module.exports = router;
