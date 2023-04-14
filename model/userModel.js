const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    salary: {
        type: Number,
    },
    date: {
        type: String,
    },
});

const userModel = mongoose.model("Employee", userSchema);

module.exports = userModel;
