'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:PrimaryCtrl
 * @description
 * # PrimaryCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('PrimaryCtrl', ['$scope','$mdSidenav', '$location', 'WebServices', function ($scope, $mdSidenav, $location, WebServices) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /**
     * Allow to toggle a sidenav identified by its id
     * @param  {[type]} menuId [description]
     * @return {[type]}        [description]
     */
    $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	  };

		/**
		 * Use this function to change view with ng-click
		 * @param  {[type]} path [description]
		 * @return {[type]}      [description]
		 */
	  $scope.go = function (path) {
	  	if ($location.path() === path) {
	  		$scope.hideLoadingBar();
	  	} else {
	    	$location.path(path);
	    }
	  };


  }]);
