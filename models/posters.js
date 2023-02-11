const mongoose = require('mongoose');

const posterSchema = mongoose.Schema({
    alt: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    extraImages: {
        type: [String],
    },
    identifier: {
        type: String,
    },
});

module.exports =
    mongoose.models.Posters || mongoose.model('Posters', posterSchema);
