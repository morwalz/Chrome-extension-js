(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone', '../views/view', 'text!../tmpl/404.ejs'], function($, _, Backbone, View, templateText) {
    var HomeView, _ref;
    HomeView = (function(_super) {
      __extends(HomeView, _super);

      function HomeView() {
        _ref = HomeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      HomeView.prototype.className = 'error-view';

      HomeView.prototype.initialize = function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        return this.template = _.template(templateText);
      };

      HomeView.prototype.render = function() {
        return this.$el.html(this.template());
      };

      return HomeView;

    })(View);
    return HomeView;
  });

}).call(this);
