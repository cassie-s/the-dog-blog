// Dependencies
const router = require('express').Router();
const { Vote, User } = require('../../models');

router.get('/', (req, res) => {
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
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  });
  
router.post('/', (req, res) => {
  Vote.create({
    vote_id: req.body.vote_id 
  })
  .then(postVoteData => res.json(postVoteData))
  .catch(err => {
    console.log(err);
    console.log(postVoteData)
    res.status(500).json(err);
  })
})

// UPDATE Vote Count 
router.put('/', (req, res) => {
  if (req.session){
  Vote.create(req.body, { Vote })
  .then(updatedVoteData => res.json(updatedVoteData))
  .catch(err => {
    console.log(err);
    console.log(updatedVoteData)
    res.status(500).json(err);
  });
}
});

module.exports = router;