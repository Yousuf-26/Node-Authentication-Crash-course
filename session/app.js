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
*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Topic - Express Session</h1>");
});

app.listen(3000, () => {
  console.log("Listening ... to port 3000");
});
