/*global define*/
var backboneJsonApi = require('./backbone-jsonapi');
if (typeof define === 'function' && define.amd) {
  define(['Backbone', '_'], function (Backbone, _) {
    window.backboneJsonApi = backboneJsonApi(Backbone, _);
    return window.backboneJsonApi;
  });
} else {
  window.backboneJsonApi = backboneJsonApi(window.Backbone, window._);
}