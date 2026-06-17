const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {type: Number, default: 0},
    stock: {type: Number, default: 0}
});

module.exports = mongoose.model("Produce", produceSchema);