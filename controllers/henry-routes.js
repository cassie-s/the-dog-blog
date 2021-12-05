//Dependencies
const { User, Comment, Vote } = require('../models');
const router = require('express').Router();

// GET all comments
router.get('/', (req, res) => {
    Comment.findAll({
        // Query configuration
        attributes: ['id', 
                     'comment_text',
                     'user_id'
                    ],
        // JOIN to the User table
        include: [
            {
            model: User, 
            attributes: ['username']
            }
        ]
     })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// GET all upvotes
router.get('/', (req, res) => {
    Vote.findAll()
    .then(dbVoteData => res.json(dbVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// POST a new comment
  router.post('/', (req, res) => {
      Comment.create({
          comment_text: req.body.comment_text,
          user_id: req.body.user_id
        })
          .then(dbCommentData => res.json(dbCommentData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
  });
  

module.exports = router;