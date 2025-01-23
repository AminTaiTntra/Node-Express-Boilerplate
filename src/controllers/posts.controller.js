const httpStatus = require('http-status');
const { postService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createPost = catchAsync(async (req, res) => {
  console.log('HELLO', req);
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

module.exports = {
  createPost,
};
