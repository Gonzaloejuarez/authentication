const {Router} = require("express")

const getUser = require("../controllers/getUser")
const getRegister = require("../controllers/getRegister");
const getLogin = require("../controllers/getLogin")
const veryfyToken = require("../middlewares/VerifyToken")

const router = Router();

router.get("/user",veryfyToken , getUser)
router.post("/login", getLogin)
router.post("/register", getRegister);


module.exports = router

