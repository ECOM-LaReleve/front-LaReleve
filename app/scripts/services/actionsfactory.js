'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.actionsFactory
 * @description
 * # actionsFactory
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('BesoinsFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.besoins.get, //urls
      {},                                 //params
      { getBesoins : {                    //actions
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
  }])

  .factory('BesoinsByIdFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.besoins.getById, //urls
      {id:'@id'},                             //params
      { getBesoinsById : {                    //actions
        method: 'GET',
        interceptor: {
          responseError: function (data) {
            $rootScope.$broadcast('requestResponseError', data);  //broadcast an event if an error occurred
          }
        },
        headers: {'Content-Type': 'application/json'}
      }
    });
  }]);
