const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dogRoutes = require('./dog-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dog-routes', dogRoutes);


module.exports = router;