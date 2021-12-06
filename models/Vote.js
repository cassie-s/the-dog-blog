const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {
  static upvote(body, models){
        return models.Vote.create({
          user_id: body.user_id,
          vote_id: body.vote_id
        }).then(() => {
          return Vote.findOne({
            where: {
              user_id: body.user_id
            },
            attributes: [
            'id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE vote.id = vote_id)',
              'vote_count')]
            ]
          })
        })
}
}

Vote.init(
    {
      vote_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },	
        // username: {
        //     type: DataTypes.STRING,
        //     primaryKey: false,
        //     allowNull: false
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    //     dog_name: {
    //       type: DataTypes.STRING,
    //       allowNull: false
    //   }       
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