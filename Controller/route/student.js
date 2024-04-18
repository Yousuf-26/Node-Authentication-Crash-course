const express = require("express");
const router = express.Router();
const studentController = require("../Controller/studentController");

router.get("/all", studentController.allStudent);
router.get("/delete/:id", studentController.deleteStudent);
module.exports = router;
