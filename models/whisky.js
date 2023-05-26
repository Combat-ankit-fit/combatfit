const mongoose = require('mongoose');

const whiskeySchema = mongoose.Schema({
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
    mongoose.models.Whiskeys || mongoose.model('Whiskeys', whiskeySchema);
