const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const postsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 10,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  }
);

//! Pluggin to convert mongoose to JSON
postsSchema.plugin(toJSON);

postsSchema.pre('save', async function (next) {
  next();
});

const Posts = mongoose.model('Posts', postsSchema);

// const post = new Posts({
//   title: 'This is my First Post Title',
//   description: 'This is a small description about the first post',
// });

// post.save();

module.exports = Posts;
