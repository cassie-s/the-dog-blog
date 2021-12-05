const router = require('express').Router();

const henryRoutes = require('./henry-routes');
const janetRoutes = require('./janet-routes');
const mayoRoutes = require('./mayo-routes');
const snowballRoutes = require('./snowball-routes');

router.use('/henry', henryRoutes);
router.use('/janet', janetRoutes);
router.use('/mayo', mayoRoutes);
router.use('/snowball', snowballRoutes);

module.exports = router;