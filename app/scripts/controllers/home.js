'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('HomeCtrl', ['$scope', 'ExempleFactory', 'BesoinsFactory', function ($scope, ExempleFactory, BesoinsFactory) {
    
    /**
     * Initialize Project list
     */
    $scope.utilisateursList = function() {
       ExempleFactory.getUtilisateurs(function (utilisateurs){
        utilisateurs.$promise.then(function(utilisateurs) {
        	$scope.utilisateurs = utilisateurs;

        	console.log($scope.utilisateurs);
        	//Hide the loading bar when the data are available
        	//$scope.hideLoadingBar();
        });
      });
    };

    /**
     * Initialize Project list
     */
    $scope.besoinsList = function() {
       BesoinsFactory.getBesoins(function (besoins){
        besoins.$promise.then(function(besoins) {
          $scope.besoins = besoins;

          console.log($scope.besoins);
          console.log($scope.$parent)
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };


    $scope.utilisateursList();

    $scope.besoinsList();



  }]);
