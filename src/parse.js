var toolbox = require('./toolbox');

var setParseFunctions = module.exports = function (Backbone, _) {
  toolbox = toolbox(_); // Bootstrap toolbox;
  Backbone.Collection.prototype.parse = function (response) {
    var output = toolbox.parse(response);
    var mainCollection = toolbox.getMainCollection(response);
    return output[mainCollection];
  };
  Backbone.Model.prototype.parse = function (response) {
    var output = toolbox.parse(response);
    var mainCollection = toolbox.getMainCollection(response);
    return output[mainCollection][0];
  };
};

try {
  window.BBJSONAPI = window.BBJSONAPI || {};
  window.BBJSONAPI.setParseFunctions = setParseFunctions;
} catch (e) {}