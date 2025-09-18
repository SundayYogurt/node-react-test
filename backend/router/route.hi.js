const express = require("express"); // import express
const router = express.Router(); // สร้าง router object

router.get("/", (req, res) => {
  res.send("Hi!");
});

module.exports = router;
