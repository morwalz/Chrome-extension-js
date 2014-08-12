(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone', '../views/view', '../views/loading', '../views/home', 'text!../tmpl/index.ejs'], function($, _, Backbone, View, LoadingView, HomeView, templateText) {
    var AppView, _ref;
    AppView = (function(_super) {
      __extends(AppView, _super);

      function AppView() {
        _ref = AppView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppView.prototype.el = $('#app-container');

      AppView.prototype.loadingPercent = 0;

      AppView.prototype.isLoading = true;

      AppView.prototype.viewAttachTo = {
        'loading': '#main-container',
        'home': '#main-container'
      };

      AppView.prototype.initialize = function() {
        var _this = this;
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.template = _.template(templateText);
        this.subview('loading', new LoadingView);
        this.subview('home', new HomeView);
        this.currentViewName = 'loading';
        this.currentView = this.subview(this.currentViewName);
        this.render();
        return addEventListener('unload', function() {
          return _this.teardown();
        });
      };

      AppView.prototype.routes = {
        '': 'home',
        '/': 'home',
        'home': 'home'
      };

      AppView.prototype.render = function() {
        this.$el.html(this.template);
        return this.showView(this.currentViewName);
      };

      return AppView;

    })(View);
    return AppView;
  });

}).call(this);
