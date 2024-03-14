const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');


// GET all books
router.get('/books', booksController.getBooks);

// GET a specific book by ID
router.get('/books/:id', booksController.getBookById);

// POST a new book
router.post('/books', booksController.createBook);

module.exports = router;
