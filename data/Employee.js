const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});


// mongoose automatically looks for the plural, lowercased version of your model name, EX: model Employee -> employees collection
module.exports = mongoose.model("Employee", employeeSchema);