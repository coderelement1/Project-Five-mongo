const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    text : {
        type : String,
        required : true
    }
})
const DataSchema = mongoose.model("Names", dataSchema);
module.exports = DataSchema;