const router = require('express').Router();

const henryRoutes = require('./henry-routes');

router.use('/henry', henryRoutes);

module.exports = router;