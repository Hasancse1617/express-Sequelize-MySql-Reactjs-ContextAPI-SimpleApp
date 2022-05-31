const app = require("express");
const router = app.Router();
const { allPost, createPost, createComment, editPost, updatePost, deletePost } = require("../controller/PostController");

router.get("/all-post", allPost);
router.post("/create-post", createPost);
router.post("/create-comment", createComment);
router.get("/edit-post/:id", editPost);
router.post("/update-post/:id", updatePost);
router.post("/delete-post/:id", deletePost);

module.exports = router;