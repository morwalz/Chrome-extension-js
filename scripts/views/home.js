(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone', '../views/view', 'text!../tmpl/login.ejs'], function($, _, Backbone, View, templateText) {
    var LoginView, _ref;
    return LoginView = (function(_super) {
      __extends(LoginView, _super);

      function LoginView() {
        _ref = LoginView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LoginView.prototype.className = "login-view";

      LoginView.prototype.initialize = function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.template = _.template(templateText);
        return this.render();
      };

      LoginView.prototype.render = function() {
        this.$el.html(this.template());
        return this;
      };

      return LoginView;

    })(View);
  });

}).call(this);
