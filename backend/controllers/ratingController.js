const { Rating } = require('../models/ratingRoutes');
const { Store } = require('../models/storeRoutes');

exports.createRating = async (req, res) => {
  try {
    const { storeId, rating, comment } = req.body;
    const newRating = await Rating.create({
      userId: req.user.id,
      storeId,
      rating,
      comment
    });

    res.status(201).json({ message: 'Rating submitted', newRating });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit rating' });
  }
};

exports.getRatingsForStore = async (req, res) => {
  try {
    const ratings = await Rating.findAll({ where: { storeId: req.params.storeId } });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch ratings' });
  }
};

exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.findAll();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch ratings' });
  }
};
