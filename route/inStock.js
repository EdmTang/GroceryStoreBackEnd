const express = require('express');
const router = express.Router();
const produceController = require('../controller/produceController');
const verifyRoles = require('../Middleware/verfiyRoles');
const roles = require('../config/roles_list');

router.route('/')
    .get(produceController.getAllProduce)
    .post(verifyRoles(roles.Admin, roles.Editor),produceController.addProduce)
    .put(verifyRoles(roles.Admin, roles.Editor), produceController.updateProduce)
    .delete(verifyRoles(roles.Admin, roles.Editor), produceController.deleteProduce)
module.exports = router;