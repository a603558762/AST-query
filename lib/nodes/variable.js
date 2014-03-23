var _ = require('lodash');
var valueFactory = require('../factory/value.js');

/**
 * Variable node object abstraction
 * @constructor
 * @param  {Array(object)} nodes
 */
var Variable = module.exports = function (nodes) {
  this.nodes = Array.isArray(nodes) ? nodes : [nodes];
  this.length = nodes.length;
};

/**
 * Change or get the variable value
 *
 * @param  {String} value  New value string
 * @return {Object}        Wrapped value
 *
 * @or
 * @return {Object}        Wrapped value
 */
Variable.prototype.value = function (val) {
  if (_.isString(val)) {
    this.nodes.forEach(function (node) {
      node.init = valueFactory.create(val);
    });
  }
  return valueFactory.wrap(this.nodes[0].init);
};

/**
 * Rename the variable
 * @param  {string} name  New variable name
 * @return {null}
 */
Variable.prototype.rename = function (name) {
  this.nodes.forEach(function (node) {
    node.id.name = name;
  });
  return this;
};