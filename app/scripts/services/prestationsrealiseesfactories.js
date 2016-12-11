'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.PrestationsRealiseesFactories
 * @description
 * # PrestationsRealiseesFactories
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('PrestationsRealiseesFactories', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
