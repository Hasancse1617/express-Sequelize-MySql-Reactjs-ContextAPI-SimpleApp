const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db");

class Comment extends Model {}

Comment.init({
  // Model attributes are defined here
  post_id: {
    type: DataTypes.INTEGER,
  },
  comment: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'comment'
});

module.exports = Comment;