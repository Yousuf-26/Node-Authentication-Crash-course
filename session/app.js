// TOPIC - SESSION
/*
Cookie - text data send by the server and stores in the client
Session - data send by client to server and stores it there

What is secret in session?

This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets.
If an array of screts is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying 
the signature in requests

resave - it forces the session to be saed back to the session store

npm i express-session

req.session --> To store or access session data, simply use the request property req.session ,which is serialized
as JSON by the store , so nested objects are typically fine

req.session.regenerate --> To regenerate the session simply invoke the method
req.session.destroy ---> It destroys the session and will unset the req.session property. Once complete, the callback will be invoked

*/
const web = require("./routes/web");
const express = require("express");
const session = require("express-session");
const app = express();

//IMPLEMENT SESSION OVER HERE
app.use(
  session({
    name: "sumaya",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/student", web);

app.listen(3000, () => {
  console.log("Listening ... to port 3000");
});
