/* 
What are Controllers?
Controllers can group related request handling logic separately. Instead of defining all of your request handling logic as callback 
in route or route files, you may wish to organize this behavior using Controller modules

*/

const express = require("express");
const app = express();
const student = require("./route/student");
//app.use helps us to load
app.use("/student", student);

app.listen(3000, () => {
  console.log("app is listening to PORT: 3000");
});
