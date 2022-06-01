const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db");
const Comment = require("./Comment");

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

// Post.hasMany(Comment, {foreignKey:'post_id'});// HasMany Relation
// Comment.belongsTo(Post, {foreignKey: 'post_id'});

module.exports = Post;