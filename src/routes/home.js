const express = require("express");
const router = express.Router();
const homeController = require("../app/controllers/homeController");
const verifyToken = require("../app/middlewares/verifyToken");

router.post("/showProduct", verifyToken.verifyToken, homeController.showProduct);

module.exports = router;
