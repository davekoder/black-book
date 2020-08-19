const express = require("express");
const router = express.Router();

// HTTP Requests / CRUD requests
// get - fetch data from the server
// post - submit something to the server
// delete - delete something from the server
// put - update something that is already in the server

// FOR THIS ROUTE, ITS GOING TO HAVE 4 CRUD ROUTES

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private - because you need to be authenticated and logged in
router.get("/", (req, res) => {
  res.send("Get all Contacts");
});

//@route    POST api/contacts
//@desc     Add new contact
//@access   Private - because you need to be authenticated and logged in
router.post("/", (req, res) => {
  res.send("Add Contact");
});

//@route    PUT api/contacts/:id
//@desc     Update Contact
//@access   Private - because you need to be authenticated and logged in
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

//@route    DELETE api/contacts/:id
//@desc     Delete Contact
//@access   Private - because you need to be authenticated and logged in
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
