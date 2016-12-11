'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.IndividuFactories
 * @description
 * # IndividuFactories
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('IndividusFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.individus.get, //urls
      {},                                 //params
      { getIndividus : {                    //actions
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

  .factory('IndividusByMenageFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.prestationsrealisees.getByMenageId, //urls
      {id:'@id'},                             //params
      { getIndividusByMenage : {                    //actions
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

  ;
