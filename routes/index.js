const express = require('express');
const router = express.Router();

const userRoutes = require('./user/user.routes');
const bookRoutes = require('./book/book.routes');
const authorsRoutes = require('./author/author.routes');
const genresRoutes = require('./genres/genres.routes');
const bookinstanceRoute = require('./bookinstance/bookinstance.routes');

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/authors', authorsRoutes);
router.use('/genres', genresRoutes);
router.use('/bookinstance', bookinstanceRoute);
module.exports = router;
