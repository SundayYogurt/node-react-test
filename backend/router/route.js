const express = require("express"); // import express
const router = express.Router(); // สร้าง router object

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = router;
