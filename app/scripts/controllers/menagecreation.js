'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:MenagecreationCtrl
 * @description
 * # MenagecreationCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('MenagecreationCtrl', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.individus = ['boy', 'girl', 'dog', 'town', 'car', 'cat'].map(function(state) {
    	return {
          value: state.toLowerCase(),
          display: state
        };
    });


    $scope.querySearch = function (query) {
      var results = query ? $scope.individus.filter( createFilterFor(query) ) : $scope.individus;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    };

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }


  }]);
