const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    idAuthor: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;