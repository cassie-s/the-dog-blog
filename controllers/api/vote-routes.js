// Dependencies
const router = require('express').Router();
const { User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { route } = require('..');

router.get('/', (req, res) => {
    Vote.findAll({
              // Query configuration
              attributes: ['user_id', 
                           [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE vote.id = vote.vote_id)'),'vote_count']
                        ],

              // JOIN to the User table
              include: [
                  {
                  model: User, 
                  attributes: ['username']
                  }
              ]
            })

    .then(dbVoteData => res.json(dbVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// UPDATE Vote Count 
router.put('/upVote', (req, res) => {
  if (req.session){
  Post.upvote({...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
  .then(updatedVoteData => res.json(updatedVoteData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}
});
module.exports = router;