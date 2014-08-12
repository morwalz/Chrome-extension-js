(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['jquery', 'Underscore', 'Backbone'], function($, _, Backbone) {
    var Collection, _ref;
    Collection = (function(_super) {
      __extends(Collection, _super);

      function Collection() {
        this.trigger = __bind(this.trigger, this);
        _ref = Collection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Collection.prototype.trigger = function() {
        var args, event, thisType, _ref1, _ref2, _ref3;
        event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        Collection.__super__.trigger.apply(this, arguments);
        thisType = (_ref1 = this.__proto__) != null ? (_ref2 = _ref1.constructor) != null ? _ref2.name : void 0 : void 0;
        if (typeof OH !== "undefined" && OH !== null ? (_ref3 = OH.verbose) != null ? _ref3.match(/vvvv/i) : void 0 : void 0) {
          return console.log("[E][C][" + thisType + "]:\t " + event);
        }
      };

      return Collection;

    })(Backbone.Collection);
    return Collection;
  });

}).call(this);
