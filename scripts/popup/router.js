(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone'], function($, _, Backbone) {
    var Router, _ref;
    Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        _ref = Router.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Router.prototype.initialize = function() {
        var _this = this;
        Office.router = this;
        console.log('router intialized');
        Office.on('doneLoading', function() {
          var _ref1;
          if (typeof OH !== "undefined" && OH !== null ? (_ref1 = OH.verbose) != null ? _ref1.match(/v/i) : void 0 : void 0) {
            return console.log('[app] done loading');
          }
        });
        return this.startShow();
      };

      Router.prototype.startShow = function() {
        var error, _ref1;
        try {
          Backbone.history.stop();
        } catch (_error) {
          error = _error;
          if (typeof OH !== "undefined" && OH !== null ? (_ref1 = OH.verbose) != null ? _ref1.match(/v/i) : void 0 : void 0) {
            console.log(error);
          }
        }
        return Backbone.history.start({
          pushState: true,
          root: OH.baseDir || ''
        });
      };

      Router.prototype.home = function() {
        var _ref1;
        if (typeof OH !== "undefined" && OH !== null ? (_ref1 = OH.verbose) != null ? _ref1.match(/v/i) : void 0 : void 0) {
          console.log('[--Router--] running home');
        }
        console.log('inside home router');
        return Office.appView.showView('home');
      };

      Router.prototype.loading = function() {
        var _ref1;
        if (typeof OH !== "undefined" && OH !== null ? (_ref1 = OH.verbose) != null ? _ref1.match(/v/i) : void 0 : void 0) {
          console.log('[--Router--] running home');
        }
        return Office.appView.showView('loading');
      };

      return Router;

    })(Backbone.Router);
    return Router;
  });

}).call(this);
