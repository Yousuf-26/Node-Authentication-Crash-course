const express = require("express");
const router = express.Router();
const StudentController = require("./studentController");

router.get("/setCookie", StudentController.set_cookie);
router.get("/getCookie", StudentController.get_cookie);
router.get("/deleteCookie", StudentController.delete_cookie);

module.exports = router;
