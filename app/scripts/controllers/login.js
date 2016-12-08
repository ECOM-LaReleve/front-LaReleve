'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('LoginCtrl', ['$scope', '$location', 'AuthenticationFactory' , function ($scope, $location, AuthenticationFactory) {
    
 
		function initController() {
		  // reset login status
		  AuthenticationFactory.Logout();
		}

    initController();

		$scope.loginFunction = function () {
		  $scope.loading = true;
		  AuthenticationFactory.Login($scope.username, $scope.password, function (result) {
	      if (result === true) {
          $location.path('/');
	      } else {
          $scope.error = 'Username or password is incorrect';
          $scope.loading = false;
	      }
		  });
		};

  }]);
