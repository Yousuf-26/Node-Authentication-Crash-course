//TOPIC - ROUTER
/*
WHAT IS ROUTER
Router class is sued to create modular, mountable route handlers
A Router instance is a complete middleware and routing system
Every Express application has a built-in app router

steps to create app router
    -  Create Router Module - routes/students.js
    -  Create Router instance 
        - const router instace
    - Define Routes using router object    
*/

//HERE WE DEFINE THE MODULE
const student = require("./students");
const express = require("express");
const app = express();

//TO LOAD THE ROUTE WE NEED TO USE APP.USE
app.use("/student", student);

app.listen(3000, () => {
  console.log("Express is working fine on http://localhost:3000");
});
