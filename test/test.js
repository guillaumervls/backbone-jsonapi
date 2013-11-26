var chai = require('chai'),
  _ = require('lodash'),
  samples = require('./mock/samples'),
  toolbox = require('../src/toolbox')(_);

var Backbone = {
  Collection: function () {},
  Model: function () {}
};

require('../src/backbone-jsonapi.js')(Backbone, _);
chai.should();

var model = new Backbone.Model();
var collection = new Backbone.Collection();

var input;
beforeEach(function () {
  input = _.clone(samples.input, true);
});

describe('Toolbox', function () {
  it('findById should find an item in a collection by id', function () {
    toolbox.findById(input.users, 'donald').name.should.equal('Donald');
  });
  it('processLink should create the proper links in the objects', function () {
    toolbox.processLink(input, input.links['videos.user'], 'videos.user').videos[1].links.user.should.equal('/engine/users/michelle');
    toolbox.processLink(input, input.links['videos.user'], 'videos.user').videos[2].user.name.should.equal('George');
  });
  it('getMainCollection should find the main collection', function () {
    toolbox.getMainCollection(input).should.equal('videos');
  });
});

describe('Parser', function () {
  it('should work for a collection', function () {
    collection.parse(input).should.deep.equal(samples.output);
  });
  it('should work for a model', function () {
    input.videos = [input.videos[3]];
    model.parse(input).should.deep.equal(_.omit(samples.output[3], '_alreadyBBJSONAPIParsed'));
  });
});