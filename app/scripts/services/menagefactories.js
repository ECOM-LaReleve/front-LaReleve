'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.MenageFactory
 * @description
 * # MenageFactory
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('MenagesFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.menages.get, //urls
      {},                                 //params
      { getMenages : {                    //actions
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

  .factory('MenagesByIdFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.menages.getById, //urls
      {id:'@id'},                             //params
      { getMenagesById : {                    //actions
        method: 'GET',
        interceptor: {
          responseError: function (data) {
            $rootScope.$broadcast('requestResponseError', data);  //broadcast an event if an error occurred
          }
        },
        headers: {'Content-Type': 'application/json'}
      }
    });
  }])

  .factory('MenagesByReferentIdFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.menages.getByReferantId, //urls
      {id:'@id'},                             //params
      { getMenagesByReferentId : {                    //actions
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
