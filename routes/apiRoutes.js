// for all routes involved with the database

const router = require("express").Router()
const Post = require("../models/Post")
const Comments = require("../models/Comments")
const withAuth = require("../utils/auth")

router.post("/save", withAuth, async (req,res) => {
    let justSaved = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    })
    res.json(justSaved)
})

router.post("/savecomment", withAuth, async (req,res) => {
  let justSaved = await Comments.create({
    body: req.body.body,
    user_id: req.session.user_id
  })
  console.log("saved comment", justSaved)
  res.json(justSaved)
})

router.put('/update/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body,{
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/delete/:id", withAuth, async (req,res) => {
    const deleteItem = await Post.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(deleteItem)
})

module.exports = router;


