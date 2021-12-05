const router = require('express').Router();
const voteRoutes = require('./vote-routes');
const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/vote', voteRoutes)

module.exports = router;