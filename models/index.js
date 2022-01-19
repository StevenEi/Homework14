const Post = require("./Post")
const User = require("./User")
const Comments = require('./Comments')

// post belong to one users
Post.belongsTo(User, {
    foreignKey: "user_id", // check syntax for the 3 foreign keys
    onDelete: "CASCADE",
})
// post has many commnets
Post.hasMany(Comments, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
})
// comments belong to user 
Comments.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
})

module.exports = {Post, User, Comments}