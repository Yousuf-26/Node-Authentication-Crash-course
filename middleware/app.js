//simple code to create server
const express = require("express");

const app = express();

function middleware1(req, res, next) {
  console.log("I am middleware");
  //next helps to move to the next function() of the route
  next();
}

//Standard express callback
function standardExpressCallback(
  requestObject,
  responseObject,
  nextMiddleware
) {
  console.log("I am the standard express function");
  responseObject.send("I am the standard express function");
}

//here the middleware1 is going to block execute the standardExpressCallback
//unless we call the next() this example of route specific middleware
//this middleware is also called as route specific middleware
app.get("/", middleware1, standardExpressCallback);

app.listen(3000, () => {
  console.log("Server is up and running");
});
