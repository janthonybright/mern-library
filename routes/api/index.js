const router = require('express').Router();
const bookshelf = require('./bookshelf');

router.use('/books', bookshelf);

module.exports = router;