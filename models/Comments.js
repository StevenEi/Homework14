const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection")

class Comments extends Model { }

// Comments list description for mysql2 - ID, Title, description = columns with the following characteristics 
Comments.init(
    {
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

module.exports = Comments;