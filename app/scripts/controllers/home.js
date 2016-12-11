'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('HomeCtrl', ['$scope', 'ExempleFactory', 'BesoinsFactory', 'ActesFactory', 'PrestationsFactory', function ($scope, ExempleFactory, BesoinsFactory, ActesFactory, PrestationsFactory) {
    
    
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

    $scope.besoinsList();

    $scope.actesList();

    $scope.prestationsList();

    $scope.utilisateursList();
  }]);
