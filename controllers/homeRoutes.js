const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");
// const { Op } = require("sequelize");

// HOME PAGE
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
    console.log("Root route OK");
    // Status
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN -- Redirects to Dashboard if already logged in.
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    console.log("Login route OK");
    return;
  }
  res.render("login");
});

// SPECIFIC BLOG BY ID
router.get("/dashboard/:id", withAuth, async (req, res) => {
  try {
    // Get User's checked owned libraries to display here.
    const userData = await User.findByPk(req.params.id);

    const user = userData.get({ plain: true });
    console.log(user);

    const blogData = await Blog.findAll({
      where: { user_id: req.params.id },
    });
    const blogs = blogData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      user,
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 404 ERROR
router.get("/404", async (req, res) => {
  try {
    res.render("404page");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
