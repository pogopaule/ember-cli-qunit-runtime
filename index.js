/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-qunit-runtime',

  included: function(app) {
    app.import('vendor/ember-cli-qunit-runtime/qunit-configuration.js', {
      type: 'test'
    });
  }
};
