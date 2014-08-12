(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['jquery', 'Underscore', 'Backbone'], function($, _, Backbone) {
    var Model, _ref;
    Model = (function(_super) {
      __extends(Model, _super);

      function Model() {
        this.trigger = __bind(this.trigger, this);
        _ref = Model.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Model.prototype.idAttribute = "_id";

      Model.prototype.trigger = function() {
        var args, event, thisType, _ref1, _ref2, _ref3;
        event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        Model.__super__.trigger.apply(this, arguments);
        thisType = (_ref1 = this.__proto__) != null ? (_ref2 = _ref1.constructor) != null ? _ref2.name : void 0 : void 0;
        if (typeof OH !== "undefined" && OH !== null ? (_ref3 = OH.verbose) != null ? _ref3.match(/vvvv/i) : void 0 : void 0) {
          return console.log("[E][M][" + thisType + "]:\t " + event);
        }
      };

      Model.prototype.toJSON = function() {
        var prop, res, _ref1;
        res = {};
        for (prop in this.attributes) {
          if (typeof this.attributes[prop] === 'object') {
            if (typeof ((_ref1 = this.attributes[prop]) != null ? _ref1.toJSON : void 0) === 'function') {
              res[prop] = _.clone(this.attributes[prop].toJSON());
            } else {
              res[prop] = _.clone(this.attributes[prop]);
            }
          } else {
            res[prop] = _.clone(this.attributes[prop]);
          }
        }
        return res;
      };

      return Model;

    })(Backbone.Model);
    return Model;
  });

}).call(this);
