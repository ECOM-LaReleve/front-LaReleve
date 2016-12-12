'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:MenageinfosCtrl
 * @description
 * # MenageinfosCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('MenageinfosCtrl', ['$scope', '$mdDialog', '$routeParams', function ($scope, $mdDialog, $routeParams) {
   	

   	$scope.infoMenageById($routeParams.id);
    $scope.getIndividusFromMenageById($routeParams.id);
  }]);
