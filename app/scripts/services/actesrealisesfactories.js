'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.ActesRealisesFactories
 * @description
 * # ActesRealisesFactories
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('ActesRealisesFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.actesrealises.get, //urls
      {},                                 //params
      { getActesRealises : {                    //actions
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

  .factory('ActesRealisesByMenageFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.actesrealises.getByMenageId, //urls
      {id:'@id'},                                 //params
      { getActesRealisesByMenage : {                    //actions
        method: 'GET',
        interceptor: {
          responseError: function (data) {
            $rootScope.$broadcast('requestResponseError', data);
          }
        },
        headers: {'Content-Type': 'application/json'},
        isArray: true
      }
    });
  }])

  .factory('ActesRealisesByIndividuFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.actesrealises.getByIndividuId, //urls
      {id:'@id'},                                 //params
      { getActesRealisesByIndividu : {                    //actions
        method: 'GET',
        interceptor: {
          responseError: function (data) {
            $rootScope.$broadcast('requestResponseError', data);
          }
        },
        headers: {'Content-Type': 'application/json'},
        isArray: true
      }
    });
  }])

  .factory('ActesRealisesByUtilisateurFactory', ['$resource', '$rootScope', 'WebServices', function ($resource, $rootScope, WebServices) {
    var userWebservices = WebServices.webServicesGroup;
    return $resource(
      userWebservices.actesrealises.getByUtilisateurId, //urls
      {id:'@id'},                                 //params
      { getActesRealisesByUtilisateur : {                    //actions
        method: 'GET',
        interceptor: {
          responseError: function (data) {
            $rootScope.$broadcast('requestResponseError', data);
          }
        },
        headers: {'Content-Type': 'application/json'},
        isArray: true
      }
    });
  }]);