const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
    alt: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    identifier: {
        type: String,
    },
});

module.exports =
    mongoose.models.Coffees || mongoose.model('Coffees', coffeeSchema);
