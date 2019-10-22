const router = require('express').Router();
const book = require('../../controllers/book');

// Matches with '/api/books'
router.route('/')
.get(book.findAll)
.post(book.create);


// Matches with '/api/books/:id'
router.route('/:id')
  .delete(book.delete);

module.exports = router;