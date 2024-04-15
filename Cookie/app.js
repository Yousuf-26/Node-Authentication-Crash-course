//TOPIC Cookies
/* 
What is Cookie?
  - A Cookie is a small piece of text data set by web server that resided on the client machine. Once its been set, 
  the client automatically returns the cookie to the web server with each request that it makes. This allows the server to place
  value it wishes to 'remember' in the cookie, and have access to them when creating a response

  Type of cookies
    - Session Cookies - Cookies that are set without the expires field are called session cookies. It is destroyed when the suer quits the browser
    - Persistent Cookies - The browser keeps it up unitl their expiration date is reached
*/

/*
Cookies in expressJS

cookie-parser is a middleware which parses cookies attached to the client request object.
Parse Cookies header and populate req.cookies with an object keyed by the cookie names.

STEP 1: MUST INSTALL THE PACKAGE
  - npm i cookie-parser

STEP 2: app.use(cookie-parser)

res.cookie() --> this cookie is attached to the response
  - It is used to set cookie name to value. The value parameter may be a sring or object converted to JSON
  syntax - res.cookie(name,value[,option])

req.cookies - This property is sued to get cookies
  - When using cookie-parser middleware, this property is an object that contains coookies snet by the request. If the request contains no cookies it defaults to {}

res.clearCookie()
  - helps to clear the cookie specified by name

*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Get ready to learn Cookies !</h1>");
});

app.listen(3000, () => {
  console.log("App is listening to server 3000");
});
