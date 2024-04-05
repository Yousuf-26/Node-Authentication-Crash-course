//TOPIC - EXPRESS ROUTE
/*
WHAT IS ROUTING?
ROUTING REFERS TO DETERMINING HOW AN APPLICATION RESPONDS TO A CLIENT REQUEST TO A PARTICULAR ENDPOINT,
WHICH IS A URI( OR PATH) AND A SPECIFIC HTTP REQUEST METHOD

HTTP METHODS?
HTTP METHODS AVAILABLE IN NODE, IS GET,POST,PUT, AND ALL
app.method('path',callback(req,res,next){})

app.route() --> can help to avoid duplicate

More topics-
String Pattern
*/

const express = require("express");
const app = express();
const port = process.env.PORT || "3000";
/*
app.get("/", (req, res) => {
  res.json([{ name: "John Cena" }, { name: "Raha" }]);
});

app.post("/", (req, res) => {
  res.send(req.headers["user-agent"]);
});

app.all("*", (req, res) => {
  res.send("Page not found");
});
*/

//IMPLEMENTED SAME THING AS ABOVE USING THE ROUTE()
app
  .route("/student")
  .get((req, res) => {
    res.json([{ name: "John Cena" }, { name: "Raha" }]);
  })
  .post((req, res) => {
    res.send(req.headers["user-agent"]);
  });

app.listen(3000, () => {
  console.log("Node server is running !! on port 3000 ");
});
