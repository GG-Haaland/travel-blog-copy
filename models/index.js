const mongoose = require('mongoose')
const LocationSchema = require('./location')
const CommentSchema = require('./comment')
const LikesSchema = require('./likes')

const Location = mongoose.model('Location', LocationSchema)
const Comment = mongoose.model('Album', CommentSchema)
const Likes = mongoose.model('Likes', LikesSchema)

module.exports = {
  Location,
  Comment,
  Likes
}