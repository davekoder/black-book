const express = require("express");
const router = express.Router();

// HTTP Requests / CRUD requests
// get - fetch data from the server
// post - submit something to the server
// delete - delete something from the server
// put - update something that is already in the server

// FOR THIS ROUTE IT WILL HAVE 2 ROUTES, ONE FOR GETTING THE LOGGED USER, AND ONE FOR LOGGING IN THE USER

//@route    GET api/auth
//@desc     Get logged in user
//@access   Private - because we are getting user data that is logged in
router.get("/", (req, res) => {
  res.send("Get Logged In User");
});

//@route    POST api/auth
//@desc     Authenticate user and get token
//@access   Public - authenticate a token
router.post("/", (req, res) => {
  res.send("Login User");
});

module.exports = router;
