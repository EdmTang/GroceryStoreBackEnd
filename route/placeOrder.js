const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const verifyRoles = require('../Middleware/verfiyRoles');
const roles = require('../config/roles_list');

router.route('/')
    .get(orderController.getOrder)
    .post(orderController.makeOrder)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder)
module.exports = router;