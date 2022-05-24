const router = require("express").Router();
const { User, Blog, PostComment, Comment } = require("../models");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");

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
router.get("/blog/:id", async (req, res) => {
  try {
    // Get User's checked owned libraries to display here.
    const libraryData = await Blog.findByPk(req.params.id, {
      include: [{ model: Book, through: PostComment, as: "books" }],
    });

    const library = libraryData.get({ plain: true });
    console.log(library);

    res.render("libraryinfo", { library, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 404 ERROR
router.get('/404', async (req, res) => {
  try {
    res.render("404page");
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
