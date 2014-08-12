(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Underscore', 'Backbone', '../views/view', '!text!../tmpl/loading.ejs'], function($, _, Backbone, View, loadingTemplateText) {
    var LoadingView, _ref;
    LoadingView = (function(_super) {
      __extends(LoadingView, _super);

      function LoadingView() {
        this.render = __bind(this.render, this);
        this.updateLoading = __bind(this.updateLoading, this);
        _ref = LoadingView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LoadingView.prototype.isLoading = true;

      LoadingView.prototype.className = 'initial-loading';

      LoadingView.prototype.initialize = function() {
        var _this = this;
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.template = _.template(loadingTemplateText);
        Office.on('loading-update', function(percent) {
          return this.updateLoading(percent);
        });
        Office.on('doneLoading', function() {
          return _this.updateLoading(100);
        });
        return this.render();
      };

      LoadingView.prototype.doneLoading = function() {
        return this.isLoading = false;
      };

      LoadingView.prototype.updateLoading = function(percent) {
        if (this.isLoading) {
          this.$el.find('.bar').css({
            width: "" + this.percent + "%"
          });
          if (this.percent >= 100) {
            return this.doneLoading();
          }
        }
      };

      LoadingView.prototype.render = function() {
        this.$el.html(this.template);
        return this.updateLoading(5);
      };

      LoadingView.prototype.dispose = function() {
        return LoadingView.__super__.dispose.apply(this, arguments);
      };

      return LoadingView;

    })(View);
    return LoadingView;
  });

}).call(this);
