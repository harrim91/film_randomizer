var Film = require('mongoose').model('Film');

exports.index = function(req, res, next) {
  Film.find({}, function(err, films) {
    if(err) return next(err);
    res.json(films);
  });
}

exports.create = function(req, res, next) {
  film = new Film(req.body);
  film.save(function(err) {
    if(err) return next(err);
    res.json(film);
  });
}

exports.watch = function(req, res, next) {
  Film.findByIdAndUpdate(req.film.id, { $inc: { watchedCount: 1 }, lastWatched: Date.now() }, { new: true }, function(err, film) {
    if(err) return next(err);
    res.json(film);
  })
}

exports.findFilmById = function(req, res, next, id) {
  Film.findOne({
    _id: id
  }, function(err, film) {
    if(err) return next(err);
    req.film = film;
    next();
  });
}