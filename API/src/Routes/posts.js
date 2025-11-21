const express = require("express");
const router = express.Router();
const { createPost } = require("../Controllers/postController");

router.post("/", async (req, res) => {
  const body = req.body;
  const newPost = await createPost(body);
  res.json(newPost);
});

module.exports = router;
