(function() {
  require.config({
    baseURL: 'dist/scripts',
    paths: {
      jQuery: "../lib/js/jquery/jquery",
      Underscore: "../lib/js/underscore-amd/underscore",
      Backbone: "../lib/js/backbone-amd/backbone",
      text: "../lib/js/requirejs-text/text"
    },
    shim: {
      jQuery: {
        deps: [],
        exports: 'jQuery'
      },
      Backbone: {
        deps: ['jQuery', 'Underscore'],
        exports: 'Backbone'
      },
      Underscore: {
        exports: '_'
      }
    }
  }, require(["app"], function(Office) {
    var officeApp;
    officeApp = new Office();
    return officeApp;
  }));

}).call(this);
