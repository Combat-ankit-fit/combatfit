const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
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
    size: {
        type: String,
    },
});

module.exports = mongoose.models.Beer || mongoose.model('Beer', beerSchema);
