;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./toolbox":2}],2:[function(require,module,exports){
var _;

module.exports = function bootStrapToolBox(lodash) {
  _ = lodash;
  return module.exports;
};

var findById = module.exports.findById = function (array, id) {
  return _.find(array, function (item) {
    return item.id === id;
  });
};

var applyTemplateUrl = module.exports.applyTemplateUrl = function (collectionName, template, data) {
  var regex = new RegExp('{' + collectionName + '\\.(.+?)}', 'g'),
    execResult = regex.exec(template);
  if (execResult !== null) {
    if (data[execResult[1]] === undefined && data.links[execResult[1]] === undefined) {
      throw new Error('Template required a property not present in data object');
    }
    template = template.substr(0, execResult.index) + (data.links[execResult[1]] || data[execResult[1]]) + template.substr(regex.lastIndex);
  }
  return template;
};

var processLink = module.exports.processLink = function (response, linkObj, linkName) {
  var linkNameSplit = linkName.split('.'),
    collection = linkNameSplit[0],
    attribute = linkNameSplit[1];

  _.each(response[collection], function (item) {
    item.links = item.links || {};
    if (item.links[attribute] !== undefined) {
      var preloadedItem = findById(response[linkObj.type], item.links[attribute]);
      if (preloadedItem !== undefined) {
        item[attribute] = preloadedItem;
      }
    }
    item.links[attribute] = applyTemplateUrl(collection, linkObj.href, item);
  });
  return response;
};

module.exports.parse = function (response) {
  _.forOwn(response.links, function (value, key) {
    processLink(response, value, key);
  });
  return response;
};

module.exports.getMainCollection = function (response) {
  var collections = _.without(_.keys(response), 'links', 'meta');
  var types = _.pluck(_.values(response.links), 'type');
  return _.difference(collections, types)[0];
};
},{}]},{},[1])
;