const router = require('express').Router()
const { User } = require('../models/index.js')

router.post("/signup", async (req, res) => {
    try {
        const newUserData = await User.create({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
        }, {raw: true});
        req.session.save(() => {
          req.session.user_id = newUserData.id
          req.session.logged_in = true;
          res.json({message: "You are now logged in"})
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

router.post("/login", async (req, res) => {
    const userData = await User.findOne({where: {email: req.body.email}}, {raw: true})
    // if there isn't a user w/ that matches in the database returns null, not sure how to fix
    if(!userData){
        res.json({error: "user not found"})
    }

    const validPassword = await userData.checkPassword(req.body.password)
    
    if(validPassword === false){
        res.json({error: "incorrect password"})
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.send("you've signed in!")
    })
})

  router.post('/logout', async (req, res) => {
    if (req.session.user_id) {
        req.session.destroy(() => {
            res.json({message: "You have been logged out"})
        })
    }
    else {
        res.json({message: "You are already logged out"})
    }
})

module.exports = router;