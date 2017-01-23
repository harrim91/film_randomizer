var films = require('../controllers/films.controller');

module.exports = function(app) {
  app.route('/films')
    .get(films.index)
    .post(films.create);

  app.route('/films/:filmId/watch')
    .post(films.watch);

  app.param('filmId', films.findFilmById);
}