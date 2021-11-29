const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');


router.get('/vote', (req, res) => {

});

router.post('/vote', (reQ, res) => {

});




module.exports = router; 