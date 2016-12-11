'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.ActesRealisesFactories
 * @description
 * # ActesRealisesFactories
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('ActesRealisesFactories', function () {
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
