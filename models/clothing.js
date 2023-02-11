const mongoose = require('mongoose');

const clothingSchema = mongoose.Schema({
    MRP: {
        type: String,
    },
    alt: {
        type: String,
    },
    fit: {
        type: String,
    },
    identifier: {
        type: String,
    },
    name: {
        type: String,
    },
    size: {
        type: String,
    },
    stripeId: {
        type: String,
    },
    extraImages: {
        type: [String],
    },
});

module.exports =
    mongoose.models.Cloths || mongoose.model('Cloths', clothingSchema);
