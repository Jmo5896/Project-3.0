const router = require("express").Router();
const planitRoutes = require("./planit");
const signin = require("./signin");
const user = require("./user")

router.use("/planit", planitRoutes);
router.use("/signin", signin);
router.use("/user", user);

module.exports = router;