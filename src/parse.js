var toolbox = require('./toolbox');

module.exports = function (Backbone, _) {
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
};
