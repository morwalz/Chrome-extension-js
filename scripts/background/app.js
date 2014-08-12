(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone', 'deffered', 'Constants', 'ChromeExtension'], function($, _, Backbone, Deffered, Constants, ChromeExtension) {
    var Office, _ref;
    Office = (function(_super) {
      __extends(Office, _super);

      function Office() {
        _ref = Office.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Office.prototype.initialize = function() {
        window.logger = console;
        window.Office = this;
        this.isPopUpRunning = false;
        return console.log("hello from background app");
      };

      Office.prototype.popUpRunning = function(status) {
        if (status != null) {
          this.isPopUpRunning = status;
        }
        return this.isPopUpRunning;
      };

      return Office;

    })(Backbone.Model);
    return Office;
  });

}).call(this);
