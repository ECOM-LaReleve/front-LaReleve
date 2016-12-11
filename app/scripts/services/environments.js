'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.Environments
 * @description
 * # Environments
 * Service in the laReleveApp.
 */
angular.module('laReleveApp')
  .service('Environments', function Environments() {
  	// AngularJS will instantiate a singleton by calling "new" on this function
    //var env = 'http://localhost:8080'; //The testing environment
    var env = 'http://35.164.29.163';

    var envProd = 'http://35.164.29.163';	// The production environments

    /**
     * @returns {string} the environment url
     */
    this.getEnvironment = function() {
        return env;
    };
});