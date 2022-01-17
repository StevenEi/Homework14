const router = require("express").Router()

const homeRoutes = require("./homeRoutes")
const apiRoutes = require("./apiRoutes")
const userRoutes = require("./userRoutes")

router.use("/", homeRoutes)
router.use("/api", apiRoutes)
router.use("/users", userRoutes)

module.exports = router;