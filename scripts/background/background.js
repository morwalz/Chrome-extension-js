(function() {
  require.config({
    baseURL: 'scripts',
    paths: {
      jquery: "../../lib/js/zepto/zepto",
      Underscore: "../../lib/js/underscore-amd/underscore",
      Backbone: "../../lib/js/backbone-amd/backbone",
      text: "../../lib/js/requirejs-text/text",
      ChromeExtension: "../chrome-extension",
      Config: "../config",
      Constants: "../constants",
      deffered: "../../lib/js/simply-deffered/deferred"
    },
    shim: {
      Constants: {
        deps: ['Config']
      },
      jquery: {
        deps: [],
        exports: '$',
        init: function() {
          return window.jQuery = $;
        }
      },
      Backbone: {
        deps: ['jquery', 'Underscore'],
        exports: 'Backbone'
      },
      Underscore: {
        exports: '_'
      },
      deffered: {
        deps: ['jquery'],
        exports: 'Deffered'
      }
    }
  }, require(["app"], function(Office) {
    var officeApp;
    window.OH = {
      verbose: "vvv"
    };
    officeApp = new Office();
    return officeApp;
  }));

}).call(this);
