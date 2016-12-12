'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.ServicesFactories
 * @description
 * # ServicesFactories
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('ServicesFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.services.get, //urls
      {},                                 //params
      { getServices : {                    //actions
        method: 'GET',
        interceptor: {
          responseError: function (data) {
            $rootScope.$broadcast('requestResponseError', data);  //broadcast an event if an error occurred
          }
        },
        headers: {'Content-Type': 'application/json'},
        isArray: true
      }
    });
  }]);
