const express = require("express");

const { movieLists } = require("../controllers/movieList");

const router = express.Router();

router.get("/*", movieLists);

module.exports = router;
