const { Post, User, Comment, Vote } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

// rendering all posts to homepage
router.get('/', (req, res) => {
  res.render('homepage')
});
// router.get('/', (req, res) => {
//     console.log(req.session);

    // Post.findAll({
    //     attributes: [
    //       'id',
    //       'post_url',
    //       'title',
    //       'created_at',
    //       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    //     ],
    //     include: [
    //       {
    //         model: Comment,
    //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //         include: {
    //           model: User,
    //           attributes: ['username']
    //         }
    //       },
    //       {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     ]
    //   })
    //     .then(dbPostData => {
    //       // pass a single post object into the homepage template
    //       const posts = dbPostData.map(post => post.get({ plain: true }));
    //       res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       res.status(500).json(err);
    //     });
    // });

// redirecting users to homepage once they log in
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// rendering sign up page 
router.get('/signup', (req, res) => {
    res.render('signup');
});

// //rendering one post to the single-post page
// router.get('/post/:id', (req, res) => {
//     Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//         'id',
//         'post_text',
//         'title',
//         'created_at',
//         [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username']
//         }
//       ]
//     })
//       .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No post found with this id' });
//           return;
//         }
  
//         // serialize the data
//         const post = dbPostData.get({ plain: true });
  
//         // pass data to template
//         res.render('single-post', { post, loggedIn: req.session.loggedIn});
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router; 