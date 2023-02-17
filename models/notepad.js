const mongoose = require('mongoose');

const notepadSchema = mongoose.Schema({
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

module.exports =
    mongoose.models.Notepad || mongoose.model('Notepad', notepadSchema);
