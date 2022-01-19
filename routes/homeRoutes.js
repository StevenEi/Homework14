// for routes for the different handlebar pages

const router = require("express").Router()
const Post = require("../models/Post")
const User = require("../models/User")
const Comments = require("../models/Comments")
const withAuth = require("../utils/auth")

router.get("/", async (req, res) => {
    try {
        const postComments = await Comments.findAll({
            include: [
                {model: User}
            ],
            raw: true,
            nest: true
        })
        const databasePosts = await Post.findAll({
            include: [
                {model: User}
            ],
            raw: true,
            nest: true
        })
        res.render('home', {logged_in: req.session.logged_in, allPosts: databasePosts, userComments: postComments})
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    // if the person is logged in already, redirects to the above page
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // renders the login handlebars page 
    res.render('login');
});

// renders the dashboard handlebars page 
router.get('/dashboard', async (req, res) => {
    if (req.session.user_id) {
        const myPosts = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }, raw: true
        })
        res.render('dashboard',{ logged_in: req.session.logged_in, myPosts: myPosts});
    }
    else {
        console.log("you aren't logged in")
        res.render("login")
    }
});

// renders the specific post to be altered
router.get('/posts/:id', withAuth, async (req, res) => {
    try {
        const singlePostData = await Post.findByPk(req.params.id, {
        })
        const thePost = singlePostData.get({ plain: true })
        res.render('posts/:id', { thePost, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;