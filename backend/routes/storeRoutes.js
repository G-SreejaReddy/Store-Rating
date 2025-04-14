const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const storeController = require('../controllers/storeController');

// Public routes
router.get('/', storeController.getAllStores);
router.get('/:id', storeController.getStoreById);

// Admin-only routes
router.post('/', authenticate, authorize('admin'), storeController.createStore);
router.put('/:id', authenticate, authorize('admin'), storeController.updateStore);
router.delete('/:id', authenticate, authorize('admin'), storeController.deleteStore);

module.exports = router;
