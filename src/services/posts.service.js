const { Posts } = require('../models');

const createPost = async (postBody) => {
  console.log('POST', postBody);
  return Posts.create(postBody);
};

module.exports = {
  createPost,
};
