const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 4444
    },
    goods: Object
});
module.exports = mongoose.model("Order", orderSchema);