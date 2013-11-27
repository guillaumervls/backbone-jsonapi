var toolbox = require('./toolbox');

module.exports = function (Backbone, _) {
  if (!Backbone || !_) {
    throw new Error('Backbone and/or Lodash (or Underscore) are not loaded...');
  }
  toolbox = toolbox(_); // Bootstrap toolbox;
  Backbone.Collection.prototype.parse = function (response) {
    if (response === undefined) {
      return;
    }
    var output = toolbox.parse(response);
    var mainCollection = toolbox.getMainCollection(response);
    return _.each(output[mainCollection], function (obj) {
      obj._alreadyBBJSONAPIParsed = true;
    });
  };
  Backbone.Model.prototype.parse = function (response) {
    if (response === undefined) {
      return;
    }
    if (response._alreadyBBJSONAPIParsed) {
      delete response._alreadyBBJSONAPIParsed;
      return response;
    }
    var output = toolbox.parse(response);
    var mainCollection = toolbox.getMainCollection(response);
    return output[mainCollection][0];
  };
  return module.exports;
};

module.exports.VERSION = '0.1.6';
