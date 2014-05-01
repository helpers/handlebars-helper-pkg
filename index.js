/**
 * Handlebars Helpers: Metadata
 * Copyright (c) 2013 lesscss.org
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path   = require('path');
var fs     = require('fs');

// node_modules
var _ = require('lodash');

// package.json config object
var config = require(path.resolve(process.cwd(), 'package.json'));

// Export helpers
module.exports = function (assemble) {
  'use strict';
  var helpers = {};
  var options = assemble.config;

  /**
   * {{pkg}}
   * Return a property from package.json
   * @param  {String} key
   * @return {String}
   */
  helpers.pkg = function(key) {
    var opts = _.defaults(options, config);
    return opts[key] || '';
  };

  return helpers;
};
