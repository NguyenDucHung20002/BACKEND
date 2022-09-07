const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    strict: true,
    timestamps: true,
    collection: 'thuancutee-users',
  }
);

module.exports = mongoose.model('users', UserSchema);
