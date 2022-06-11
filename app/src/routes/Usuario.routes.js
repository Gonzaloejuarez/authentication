const {Router} = require("express")

const getRegister = require("../controllers/getRegister");
const getLogin = require("../controllers/getLogin")
const router = Router();


router.post("/login", getLogin)
router.post("/register", getRegister);


module.exports = router

