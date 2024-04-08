const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>This is a router app</h1>");
});

router.post("/input", (req, res) => {
  res.send(req.headers);
});

//Need to export this in-order to work make it work in the main app
module.exports = router;
