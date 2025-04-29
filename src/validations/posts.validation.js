const Joi = require('joi');

const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required().min(10),
    description: Joi.string().required().max(200),
  }),
};

module.exports = {
  createPost,
};
