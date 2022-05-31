const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db");

class Post extends Model {}

Post.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'post'
});

module.exports = Post;