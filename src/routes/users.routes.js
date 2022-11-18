const { Router } = require("express");
const router = Router();
const { userRegister } = require("../controllers");

router.post("/users", userRegister);

module.exports = router;
