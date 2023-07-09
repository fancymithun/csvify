const  express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")

router.post("/signin", userController.signin)
router.post("/signup", userController.signup)
router.delete("/user",userController.deleteUser)
router.get("/user/:id",userController.getUser)
router.get("/users",userController.getAllUsers)

module.exports = router