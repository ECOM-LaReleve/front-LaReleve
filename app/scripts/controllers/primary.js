'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:PrimaryCtrl
 * @description
 * # PrimaryCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('PrimaryCtrl', ['$scope', '$rootScope','$mdSidenav', '$location', 'BesoinsFactory', 'ActesFactory', 'PrestationsFactory',  'MenagesByIdFactory', 'IndividusByMenageIdFactory', 'AuthenticationFactory', function ($scope, $rootScope, $mdSidenav, $location, BesoinsFactory, ActesFactory, PrestationsFactory, MenagesByIdFactory, IndividusByMenageIdFactory, AuthenticationFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /**
     * Initialize Besoins list
     */
    $scope.besoinsList = function() {
       BesoinsFactory.getBesoins(function (besoins){
        besoins.$promise.then(function(besoins) {
          $rootScope.besoinsTypes = besoins;

          console.log($rootScope.besoinsTypes);
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
          $rootScope.actesTypes = actes;

          console.log($rootScope.actesTypes);
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };

    /**
     * Initialize Prestations list
     */
    $scope.prestationsList = function() {
       PrestationsFactory.getPrestations(function (prestations){
        prestations.$promise.then(function(prestations) {
          $rootScope.prestationsTypes = prestations;

          console.log($rootScope.prestationsTypes);
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };

     /**
     * Initialize prestations realisees list by id menage
     */
    $scope.infoMenageById = function(id) {
       MenagesByIdFactory.getMenagesById({id:id},function (menageInfos){
        menageInfos.$promise.then(function(menageInfos) {
          $scope.menageInfos = menageInfos;

          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };

     /**
     * Initialize prestations realisees list by id menage
     */
    $scope.getIndividusFromMenageById = function(id) {
       IndividusByMenageIdFactory.getIndividusByMenageId({id:id},function (individus){
        individus.$promise.then(function(individus) {
          $scope.individus = individus;
          console.log($scope.individus);
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };



    $scope.locationExposer = function() {
    	return $location;
    };

    $scope.logoutPrimary = function() {
    	// reset login status
		  AuthenticationFactory.Logout();
		  $location.path('/login');
    }

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
	  		console.log("same URL, not changing view");
	  		//$scope.hideLoadingBar();
	  		
	  	} else {
	    	$location.path(path);
	    }
	  };


  }]);
