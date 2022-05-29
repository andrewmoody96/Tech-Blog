const router = require("express").Router();
const { Blog } = require("../../models");
const { withAuth } = require("../../utils/auth");

// get all Blogs
router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogs = blogData.map((Blog) => Blog.get({ plain: true }));

        res.render("homepage", {
            blogs,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get single Blog
router.get("/blogs/:id", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        const Blog = blogData.get({ plain: true });

        res.render("blog", {
            Blog,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Post Blog
router.post("/", withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

// edit Blog
router.put("/:id", withAuth, async (req, res) => {
    try {
        const blogToEdit = await Blog.findByPk({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(201).json(blogToEdit);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete Blog
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        res.status(201).json({message: "Blog deleted."})
        if (!blogData) {
            res.status(404).json({ message: "No Blog found with this id!" });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;