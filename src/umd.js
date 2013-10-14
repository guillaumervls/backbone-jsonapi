/*global define*/
module.exports = require('./backbone-jsonapi');
if (typeof define === 'function' && define.amd) {
  define(['Backbone', '_'], function (Backbone, _) {
    window.backboneJsonApi = module.exports(Backbone, _);
    return window.backboneJsonApi;
  });
} else {
  window.backboneJsonApi = module.exports(window.Backbone, window._);
}