const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Post extends Model { }

// post list description for mysql2 - ID, Title, description = columns with the following characteristics 
Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // boilerplate sequelize model code, change modelName to fit the name of your model (on line 4 here)
        sequelize
    }

);

module.exports = Post;