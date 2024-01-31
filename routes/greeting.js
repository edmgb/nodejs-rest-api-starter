const express = require("express");
const GreetingController = require("../controllers/GreetingController");

const router = express.Router();
router.get("/", GreetingController.welcome);
router.post("/location", GreetingController.location);

module.exports = router;