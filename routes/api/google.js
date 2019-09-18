const router = require("express").Router();
const googleController = require("../../controllers/googleBooksController");

// Matches with "/api/googlebooks"
router.route("/")
  .get(googleController.findAll)
  

  module.exports = router;