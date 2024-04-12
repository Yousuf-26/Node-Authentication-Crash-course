// TOPIC - ROUTING PARAMETER
/*
Route parameters are named URL segments that are used to capture the values specified at their position in the URL 
The captured values are populated in the req.params object
examples -  /student/12            -------- www.examples.com/student/12
            /product/:category/:id -------- www.example.com/product/mobile/23
    
   app.param()  - app.param() - The app.param() function is used to add the callback triggers to route parameters. It is
   commonly used toheck for the existence of data requested related to the route parameter 
   app.param(name,callback)
   app.param([name1,name2,name3],callback)  
   the callback is only get called when it hits the right router-param name(name1,name2,name3)
   when    
*/

const express = require("express");
const app = express();

app.get("/:name/:id/:course/:major", (req, res) => {
  //since we have the route-parameter named as id so the object would be - {id:value}
  console.log(req.params); // this is actually an object {id:value}
  const { name, id, course, major } = req.params;
  res.send(
    "<h1>Hello " +
      name +
      " and has a student id of " +
      id +
      " and looking for a " +
      course +
      " as a " +
      major +
      " </h1>"
  );
});

//app.param() --> works like a middleware
app.param("id", (req, res, next, id) => {
  console.log("this is app.param");
  //res.send(id);
  next();
});

app.get("/:id", (req, res) => {
  res.send("repsonse OK");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
