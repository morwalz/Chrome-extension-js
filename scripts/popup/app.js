(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone', 'Bootstrap', 'Constants', 'router', 'ChromeExtension', 'appview'], function($, _, Backbone, Bootstrap, Constants, Router, ChromeExtension, AppView) {
    var Office, _ref;
    return Office = (function(_super) {
      __extends(Office, _super);

      function Office() {
        this.configBasedSetup = __bind(this.configBasedSetup, this);
        _ref = Office.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Office.prototype.initialize = function() {
        var init,
          _this = this;
        console.log('init start -> ' + new Date());
        ChromeExtension.popUpRunning(true);
        window.Office = this;
        this.appView = new AppView();
        this.router = new Router();
        init = function() {
          console.log('inside pop init');
          return _this.router.home();
        };
        this.listenTo(ChromeExtension.getBackgroundOfficeInstance(), 'reloadView', init);
        return init();
      };

      Office.prototype.configBasedSetup = function() {};

      console.log('init start -> ' + new Date());

      Office;

      return Office;

    })(Backbone.Model);
  });

}).call(this);
