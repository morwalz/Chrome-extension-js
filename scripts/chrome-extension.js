(function() {
  define(['jquery', 'Underscore', 'Backbone'], function($, _, Backbone) {
    var ChromeExtension;
    ChromeExtension = (function() {
      var browserAction, chromeExtension, runTime;

      function ChromeExtension() {}

      browserAction = window.chrome.browserAction;

      runTime = window.chrome.runtime;

      chromeExtension = window.chrome.extension;

      ChromeExtension.prototype.getBackgroundOfficeInstance = function() {
        return chromeExtension.getBackgroundPage().Office;
      };

      ChromeExtension.prototype.popUpRunning = function(status) {
        if (status == null) {
          status = null;
        }
        return chromeExtension.getBackgroundPage().Office.popUpRunning(status);
      };

      return ChromeExtension;

    })();
    return new ChromeExtension;
  });

}).call(this);
