'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('HomeCtrl', ['$scope', 'ExempleFactory', function ($scope, ExempleFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
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


    //$scope.utilisateursList();



  }]);
