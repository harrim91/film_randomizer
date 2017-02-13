module.exports = function(done) {
  process.env.NODE_ENV = 'test';
  require('../../server');
  done();
}