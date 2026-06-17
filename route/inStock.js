const express = require('express');
const router = express.Router();
const produceController = require('../controller/produceController');

router.route('/')
    .get(produceController.getAllProduce)
    .post(produceController.addProduce)
    .put(produceController.updateProduce)
    .delete(produceController.deleteProduce)
module.exports = router;