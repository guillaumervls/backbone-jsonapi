var _;

module.exports = function bootStrapToolBox(lodash) {
  _ = lodash;
  // Underscore shim
  _.forOwn = _.forOwn || function (obj, iterator) {
    var keys;
    try {
      keys = _.keys(obj);
    } catch (e) {
      return;
    }
    _.each(keys, function (key) {
      iterator(obj[key], key);
    });
  };
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
    try {
      item.links[attribute] = applyTemplateUrl(collection, linkObj.href, item);
    } catch (e) {}
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