const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Comment = new Schema(
  {
    UserName: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    comment: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)