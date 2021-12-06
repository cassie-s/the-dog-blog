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
          dog_name: "henry"
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
      res.render('henry', {
        comments
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  //GET all upvotes
  router.get('/vote', (req, res) => {
    if(req.session){
    Vote.findAll({
              // Query configuration
              attributes: ['req.session.user_id', 
                           [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE vote.id = vote.vote_id)'),'vote_count']
                        ],
  
              // JOIN to the User table
              include: [
                  {
                  model: User, 
                  attributes: [ 'id']
                  }
              ]
            })
  
    .then(dbVoteData => res.json(dbVoteData))
    console.log(dbVoteData)
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  });

router.post('/vote', (req, res) => {
  Vote.create({
    vote_id: req.body.vote_id 
  })
  .then(postVoteData => res.json(postVoteData))
  .catch(err => {
    console.log(err);
    console.log(postVoteData)
    res.status(500).json(err);
  })
}),

//Update upvote
  router.put('/vote', (req, res) => {
    if (req.session){
    Vote.upvote({...req.body, user_id: req.session.user_id }, { Vote, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  });

// // POST a new comment
//   router.post('/vote', (req, res) => {
//       Comment.create({
//           comment_text: req.body.comment_text,
//           user_id: req.body.user_id
//         })
//           .then(dbCommentData => res.json(dbCommentData))
//           .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//           });
//   });
  

module.exports = router;