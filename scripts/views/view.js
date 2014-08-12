(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['jquery', 'Underscore', 'Backbone', '../models/model'], function($, _, Backbone, Model) {
    var View, _ref;
    View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.subviews = [];

      View.prototype.unnamedSubviews = [];

      View.prototype.subviewsByName = {};

      View.prototype.currentView = null;

      View.prototype.currentViewName = null;

      View.prototype.viewAttachTo = {};

      View.prototype.model = new Model;

      View.prototype.keepElement = false;

      View.prototype.teardown = function() {
        var _ref1;
        this.dispose();
        return (_ref1 = this.$el) != null ? _ref1.remove() : void 0;
      };

      View.prototype.trigger = function() {
        var args, event, subview, thisType, _i, _len, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _results;
        event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        View.__super__.trigger.apply(this, arguments);
        if (event.match(/^parent:/)) {
          return;
        }
        thisType = (_ref1 = this.__proto__) != null ? (_ref2 = _ref1.constructor) != null ? _ref2.name : void 0 : void 0;
        if (typeof OH !== "undefined" && OH !== null ? (_ref3 = OH.verbose) != null ? _ref3.match(/vvvv/i) : void 0 : void 0) {
          console.log("[E][V][" + thisType + "]:\t " + event, (_ref4 = args[0]) != null ? (_ref5 = _ref4.__proto__) != null ? (_ref6 = _ref5.constructor) != null ? _ref6.name : void 0 : void 0 : void 0);
        }
        if (!(this.subviews.length > 0)) {
          return;
        }
        _ref7 = this.subviews;
        _results = [];
        for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
          subview = _ref7[_i];
          _results.push(subview.trigger.apply(subview, ['parent:' + event].concat(__slice.call(args))));
        }
        return _results;
      };

      View.prototype.subview = function(name, view) {
        if (name && view) {
          this.removeSubview(name);
          if (!this.hasOwnProperty('subviews')) {
            this.subviews = [];
          }
          if (!this.hasOwnProperty('subviewsByName')) {
            this.subviewsByName = {};
          }
          this.subviews.push(view);
          this.subviewsByName[name] = view;
          view.parentView = this;
          view.trigger('parent:add');
          return view;
        } else if (name) {
          if (!this.hasOwnProperty('subviewsByName')) {
            this.subviewsByName = {};
          }
          return this.subviewsByName[name];
        }
      };

      View.prototype.removeSubview = function(nameOrView) {
        var byName, index, name, otherName, otherView, subviews, view;
        if (!nameOrView) {
          return;
        }
        subviews = this.subviews;
        byName = this.subviewsByName;
        if (typeof nameOrView === 'string') {
          name = nameOrView;
          view = byName[name];
        } else {
          view = nameOrView;
          for (otherName in byName) {
            otherView = byName[otherName];
            if (view === otherView) {
              name = otherName;
              break;
            }
          }
        }
        if (!(name && view && view.dispose)) {
          return;
        }
        view.dispose();
        index = _.indexOf(subviews, view);
        if (index !== -1) {
          subviews.splice(index, 1);
        }
        return delete byName[name];
      };

      View.prototype.showView = function(nameOrView, destroyCurrent) {
        var byName, name, oldViewName, otherName, otherView, subviews, view, _ref1, _ref2;
        if (destroyCurrent == null) {
          destroyCurrent = false;
        }
        if (!nameOrView) {
          return;
        }
        subviews = this.subviews;
        byName = this.subviewsByName;
        if (typeof nameOrView === 'string') {
          name = nameOrView;
          view = byName[name];
        } else {
          view = nameOrView;
          for (otherName in byName) {
            otherView = byName[otherName];
            if (view === otherView) {
              name = otherName;
              break;
            }
          }
        }
        if (typeof OH !== "undefined" && OH !== null ? (_ref1 = OH.verbose) != null ? _ref1.match(/vv/i) : void 0 : void 0) {
          console.log("[View] Switching from: `" + this.currentViewName + "` to `" + name + "`");
        }
        this.currentView.trigger('hiding', this);
        this.currentView.undelegateEvents();
        if (destroyCurrent && this.currentViewName && this.currentViewName !== name) {
          if (typeof OH !== "undefined" && OH !== null ? (_ref2 = OH.verbose) != null ? _ref2.match(/vv/i) : void 0 : void 0) {
            console.log("[View] Removing old view `" + this.currentViewName + "`");
          }
          oldViewName = this.currentViewName;
          this.removeSubview(oldViewName);
        }
        this.currentView = view;
        this.currentViewName = name;
        this.currentView.trigger('showing', this);
        this.currentView.delegateEvents();
        return this.attachView(this.currentViewName);
      };

      View.prototype.attachView = function(nameOrView, render) {
        var byName, name, otherName, otherView, subviews, view, _ref1, _ref2;
        if (render == null) {
          render = true;
        }
        subviews = this.subviews;
        byName = this.subviewsByName;
        console.log(nameOrView);
        console.log(byName);
        if (typeof nameOrView === 'string') {
          name = nameOrView;
          view = byName[name];
        } else {
          view = nameOrView;
          for (otherName in byName) {
            otherView = byName[otherName];
            if (view === otherView) {
              name = otherName;
              break;
            }
          }
        }
        if (render) {
          view.render();
        }
        view.delegateEvents();
        console.log(name + ' -> ' + this.viewAttachTo[name]);
        console.log(this.$el);
        console.log(this.$el.find(this.viewAttachTo[name]));
        this.$el.find(this.viewAttachTo[name]).html(view.$el);
        if (typeof OH !== "undefined" && OH !== null ? (_ref1 = OH.verbose) != null ? _ref1.match(/vv/i) : void 0 : void 0) {
          console.log("attaching " + name + " to " + this.viewAttachTo[name]);
        }
        view.trigger('onShow');
        if (typeof OH !== "undefined" && OH !== null ? (_ref2 = OH.verbose) != null ? _ref2.match(/vv/i) : void 0 : void 0) {
          return console.log("attaching " + name + " to " + this.viewAttachTo[name]);
        }
      };

      View.prototype.changeModel = function(newModel) {
        if (this.model) {
          this.model.set(newModel.toJSON());
        } else {
          this.model = newModel;
        }
        return this;
      };

      View.prototype.replaceModel = function(newModel) {
        return this.model = newModel;
      };

      View.prototype.disposed = false;

      View.prototype.dispose = function() {
        var name, view, _i, _len, _ref1, _ref2;
        if (this.disposed) {
          return;
        }
        if (this.hasOwnProperty('subviewsByName')) {
          _ref1 = this.subviews;
          for (name in _ref1) {
            view = _ref1[name];
            this.removeSubview(name);
          }
        }
        if (this.hasOwnProperty('unnamedSubviews')) {
          _ref2 = this.unnamedSubviews;
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            view = _ref2[_i];
            view.dispose();
          }
        }
        this.off();
        this.remove();
        this.undelegateEvents();
        return this.disposed = true;
      };

      return View;

    })(Backbone.View);
    return View;
  });

}).call(this);
