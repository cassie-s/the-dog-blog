const Vote = require('./Vote');
const User = require('./User');
const Comment = require('./Comment');

Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  

  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  

module.exports = { User, Vote, Comment };
