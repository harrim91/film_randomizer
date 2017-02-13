const expect = require('chai').expect;
const Film = require('../../../app/models/film.model');

describe('expect', function() {
  describe('when evaluating true', function() {
    it('returns as true', function() {
      expect(true).to.be.true;
    });
    it('returns as not false', function() {
      expect(true).to.not.be.false;
    });
  });
});
