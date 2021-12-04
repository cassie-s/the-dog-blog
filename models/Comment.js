// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create comment model
class Comment extends Model {}

Comment.init(
    {
      // columns will go here
      id: {
          type: DataTypes.INTEGER,
          allowNull: false, 
          primaryKey: true,
          autoIncrement: true
        },
      comment_text: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'post',
        //         key: 'id'
        //     },
        // }
  
    },
  
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
  );

  // Exports
module.exports = Comment;