const express = require("express");
const router = express.Router();
const homeController = require("../app/controllers/homeController");
const verifyToken = require("../app/middlewares/verifyToken");

router.post("/showProduct", verifyToken.verifyToken, homeController.showProduct);
router.post("/search", homeController.elasticSearch);
router.get("/pipeline", homeController.pipeLine);



module.exports = router;
