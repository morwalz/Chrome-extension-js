(function() {
  console.log('loading start ' + new Date());

  require.config({
    baseURL: 'scripts',
    map: {
      '*': {
        'jQuery': 'jquery'
      }
    },
    paths: {
      zepto: "../../lib/js/zepto/zepto.custom",
      jquery: "../../lib/js/zepto/zepto-jquery",
      Underscore: "../../lib/js/underscore-amd/underscore",
      Backbone: "../../lib/js/backbone-amd/backbone",
      Bootstrap: "../../lib/js/bootstrap/bootstrap.custom",
      text: "../../lib/js/requirejs-text/text",
      Config: "../config",
      Constants: "../constants",
      ChromeExtension: "../chrome-extension",
      googleAnalytics: "../../lib/asyncTracking"
    },
    shim: {
      Constants: {
        deps: ['Config']
      },
      jquery: {
        deps: ['zepto'],
        exports: 'jQuery'
      },
      Backbone: {
        deps: ['jquery', 'Underscore'],
        exports: 'Backbone'
      },
      Underscore: {
        exports: '_'
      },
      Bootstrap: {
        deps: ['jQuery']
      },
      googleAnalytics: {
        exports: 'googleAnalytics'
      }
    }
  }, require(["app"], function(Office) {
    var officeApp;
    window.OH = {
      verbose: "vvv"
    };
    officeApp = new Office();
    console.log('loading end ' + new Date());
    return officeApp;
  }));

}).call(this);
