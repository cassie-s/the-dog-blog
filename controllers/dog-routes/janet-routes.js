//Dependencies
const { User, Comment, Vote } = require('../../models');
const router = require('express').Router();

// GET all comments
router.get('/', (req, res) => {
    Comment.findAll({
        // Query configuration
        attributes: ['id', 
                     'comment_text',
                     'user_id'
                    ],
        where: {
          dog_name: "janet"
        },
        // JOIN to the User table
        include: [
            {
            model: User, 
            attributes: ['username']
            }
        ]
     })
     .then(dbCommentData => {
      const comments = dbCommentData.map(comment => comment.get({ plain: true }));
      res.render('janet', {
        comments
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// // GET all upvotes
// router.get('/', (req, res) => {
//     Vote.findAll()
//     .then(dbVoteData => res.json(dbVoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });
// //Update upvote
// router.put('/upVote', (req, res) => {
//   if (req.session){
//   Vote.upvote({...req.body, user_id: req.session.user_id }, { Vote, User })
//   .then(updatedVoteData => res.json(updatedVoteData))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// }
// });

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
  

// Exports
module.exports = router;