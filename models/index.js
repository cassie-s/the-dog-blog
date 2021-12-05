const Vote = require('./Vote');
const User = require('./User');
const Comment = require('./Comment');

Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  

  Comment.belongsTo(User, {
    foreignKey: 'user_id'
    //, onDelete: 'SET NULL'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
    //, onDelete: 'SET NULL'
  });
  

module.exports = { User, Vote, Comment };
