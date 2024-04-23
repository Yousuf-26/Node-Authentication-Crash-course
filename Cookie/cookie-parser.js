//WHAT IS COOKIE-PARSER
/*
cookie-parser is a middleware which parses cookies attached to the client request object.
Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
*/

//res.cookie() - It is used to set cookie name to value. Th evalue parameter may be a string or object converted to JSON
//req.cookies() - This property is used to get cookies
//res.clearCookie()

const web = require("../Cookie/controller/web");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

//app.use helps us to load
app.use("/web", web);
//Cookie-parser
app.use(cookieParser());
/*
app.get("/", (req, res) => {
  res.send("<h1>Raha lives in usa</h1>");
});
*/

app.listen(3000, () => {
  console.log("I am listening to port");
});
