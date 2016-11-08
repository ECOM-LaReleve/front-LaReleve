'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.ExempleFactory
 * @description
 * # ExempleFactory
 * Factory in the laReleveApp.
 */
angular.module('laReleveApp')
  .factory('ExempleFactory', ['$resource', '$rootScope', 'webservices', function ($resource, $rootScope, webservices) {
    var userWebservices = webservices.webServicesGroup;
    return $resource(
      userWebservices.assignments.projectDefault, //urls
      {id:'@id'},                                 //params
      { getProjectStaffing : {                    //actions
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
