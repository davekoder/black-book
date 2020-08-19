const express = require("express");
const router = express.Router();

// HTTP Requests / CRUD requests
// get - fetch data from the server
// post - submit something to the server
// delete - delete something from the server
// put - update something that is already in the server

// THIS ROUTE ON HAS 1 FOR REGISTERING A USER

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post("/", (req, res) => {
  res.send("Register a User");
});

module.exports = router;
