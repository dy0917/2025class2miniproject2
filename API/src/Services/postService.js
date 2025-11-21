const Post = require("../Models/post");

const addPost = async (post) => {
  const savedPost = await Post(post).save();
  return savedPost;
};

module.exports = {
  addPost,
};
