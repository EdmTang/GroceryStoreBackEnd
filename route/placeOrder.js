const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const verifyRoles = require('../Middleware/verfiyRoles');
const roles = require('../config/roles_list');

router.route('/')
    .get(verifyRoles(roles.User), orderController.getOrder)
    .post(verifyRoles(roles.User), orderController.makeOrder)
    .put(verifyRoles(roles.User), orderController.updateOrder)
    .delete(verifyRoles(roles.User), orderController.deleteOrder)
module.exports = router;