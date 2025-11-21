const { addPost } = require("../Services/postService");

const createPost = async (post) => {
  const newPost = await addPost(post);
  return newPost;
};

module.exports = {
  createPost,
};
