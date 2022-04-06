const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Likes = new Schema(
  {
    likes: { type: Number, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Likes', Likes)