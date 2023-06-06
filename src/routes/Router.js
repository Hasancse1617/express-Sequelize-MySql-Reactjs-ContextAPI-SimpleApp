const app = require("express");
const router = app.Router();
const { allPost, allComment, createPost, createComment, editPost, updatePost, deletePost } = require("../controller/PostController");

router.get("/all-post/:page", allPost);
router.get("/all-comment/:id", allComment);
router.post("/create-post", createPost);
router.post("/create-comment/:id", createComment);
router.get("/edit-post/:id", editPost);
router.post("/update-post/:id", updatePost);
router.post("/delete-post/:id", deletePost);

module.exports = router;