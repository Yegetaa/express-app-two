const express = require('express');
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get Brand");
  })
  .post((req, res) => {
    res.send("Create Brand");
  });

module.exports = router;