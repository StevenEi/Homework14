const sequelize = require('../config/connection');
const { Post, User, Comments } = require("../models/index.js")

const postData = require("./postSeeds.json")
const userData = require("./userSeeds.json")
const commentData = require("./commentSeeds.json")

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
