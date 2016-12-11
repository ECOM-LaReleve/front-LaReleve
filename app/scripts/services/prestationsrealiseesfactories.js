'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.PrestationsRealiseesFactories
 * @description
 * # PrestationsRealiseesFactories
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('PrestationsRealiseesFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.prestationsrealisees.get, //urls
      {},                                 //params
      { getPrestationsRealisees : {                    //actions
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

  .factory('PrestationsRealiseesByMenageFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.prestationsrealisees.getByMenage, //urls
      {id:'@id'},                             //params
      { getPrestationsRealiseesByMenage : {                    //actions
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

  .factory('PrestationsRealiseesByIndividuFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.prestationsrealisees.getByIndividu, //urls
      {id:'@id'},                             //params
      { getPrestationsRealiseesByIndividu : {                    //actions
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

  .factory('PrestationsRealiseesByUtilisateurFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.prestationsrealisees.getByUtilisateur, //urls
      {id:'@id'},                             //params
      { getPrestationsRealiseesByUtilisateur : {                    //actions
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
