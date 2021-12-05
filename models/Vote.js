const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {
static upvote(body, models){
        return models.Vote.create({
          user_id: body.user_id,
          vote_id: body.vote_id
        }).then(() => {
          return Post.findOne({
            where: {
              id: body.post_id
            },
            attributes: [
              'id',
            [
              sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
              'vote_count'
            ]
          ]
          });
        })
        }
      }


Vote.init(
    {
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        vote_id: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            autoIncrement: true
        },	
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);
module.exports = Vote;