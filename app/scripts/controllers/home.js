'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('HomeCtrl', ['$scope', 'ExempleFactory', 'BesoinsFactory', 'ActesFactory', function ($scope, ExempleFactory, BesoinsFactory, ActesFactory) {
    
    /**
     * Initialize Utilisateurs list
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
     * Initialize Besoins list
     */
    $scope.besoinsList = function() {
       BesoinsFactory.getBesoins(function (besoins){
        besoins.$promise.then(function(besoins) {
          $scope.besoins = besoins;

          console.log($scope.besoins);
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };

    /**
     * Initialize Actes list
     */
    $scope.actesList = function() {
       ActesFactory.getActes(function (actes){
        actes.$promise.then(function(actes) {
          $scope.actes = actes;

          console.log($scope.actes);
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };


    $scope.utilisateursList();

    $scope.besoinsList();

    $scope.actesList();


  }]);
