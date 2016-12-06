'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.ExempleFactory
 * @description
 * # ExempleFactory
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('ExempleFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.utilisateurs.get, //urls
      {},                                 //params
      { getUtilisateurs : {                    //actions
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
