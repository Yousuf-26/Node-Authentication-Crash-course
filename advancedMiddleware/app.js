//simple code to create server
const express = require("express");

const app = express();

//  This is how we create global middleware and the order of the middleware matters
//  it uses all the middleware that is created by use and then goes to the route
//  specific middleware
//  Order does matter
app.use(middleware1);
//app.use(middleware2);
app.use(errorHandler);
function middleware1(req, res, next) {
  console.log("I am middleware no.1");
  //next helps to move to the next function() of the route
  //next can also carry information error information that is caused
  // during the route
  const errObj = new Error("I am error");
  next(errObj);
}

function middleware2(req, res, next) {
  console.log("I am middleware no.2");
  //next helps to move to the next function() of the route
  next();
}

//Middleware for error handling
function errorHandler(err, req, res, next) {
  if (err) {
    res.send("there is an error please try again");
  }
}

function errorHandler2(err, req, res, next) {}

//here the middleware1 is going to block execute the standardExpressCallback
//unless we call the next() this example of route specific middleware
//this middleware is also called as route specific middleware
app.get("/", (req, res, next) => {
  console.log("I am the standard Express function");
  res.send("<h1>Hello World ! </h1>");
});

app.listen(4000, () => {
  console.log("Server is up and running for advance");
});
