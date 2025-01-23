const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { postValidation } = require('../../validations');
const { postController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('managePosts'), validate(postValidation.createPost), postController.createPost);

module.exports = router;
