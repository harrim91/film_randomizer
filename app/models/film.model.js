var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FilmSchema = new Schema({
  title: {
    type: String
  },
  lastWatched: {
    type: Date
  },
  watchedCount: {
    type: Number,
    default: 0
  },
  related: {
    type: Array
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Film', FilmSchema);