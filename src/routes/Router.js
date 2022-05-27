const app = require("express");
const router = app.Router();
const { allUser } = require("../controller/UserController");

router.get("/", allUser);

module.exports = router;