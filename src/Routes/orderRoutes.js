const express = require('express');
const router = express.Router();
const { createOrder,getOrders,updateOrderToDelivered,updateOrderPaid } = require('../controller/createOrders');
const { protect } = require('../middleware/authMiddleware');
// Route to handle order creation
router.get('/', getOrders);
router.post('/create',protect, createOrder);
router.put('/:id/deliver', updateOrderToDelivered);
router.put('/:id/paid', updateOrderPaid);

module.exports = router;
