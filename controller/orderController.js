const Order = require('../data/Order');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const makeOrder = async (req, res) => {

    const goods = req.body;
    if(!goods) {
        return res.status(400).json({'message': 'Order Number and Status are required'});
    }
    try {
        const result = await Order.create({
            user: req.user,
            orderNumber: 1,
            goods: req.body
        });
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'message': 'Server error' });
    }
}

const getOrder = async(req, res) => {

}

const updateOrder = async(req, res) => {

}

const deleteOrder = async(req, res) => {

}

module.exports = { makeOrder, getOrder, updateOrder, deleteOrder }