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
    return output[mainCollection];
  };
  Backbone.Model.prototype.parse = function (response) {
    if (response === undefined) {
      return;
    }
    var output = toolbox.parse(response);
    var mainCollection = toolbox.getMainCollection(response);
    return output[mainCollection][0];
  };
  return module.exports;
};

module.exports.VERSION = '0.1.1';
