const mongoose = require('mongoose');

const bookExchangeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const BookExchange = mongoose.model('BookExchange', bookExchangeSchema);

module.exports = BookExchange;
