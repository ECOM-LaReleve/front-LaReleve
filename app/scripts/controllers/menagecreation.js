'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:MenagecreationCtrl
 * @description
 * # MenagecreationCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('MenagecreationCtrl', ['$scope', '$q', '$timeout', '$mdDialog', function ($scope, $q, $timeout, $mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.individusInfos = [];

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

     /**
     * Show the dialog to create a new individu to the database
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    $scope.showCreateIndividu = function(ev, isChefDeFamille) {
      $mdDialog.show({
        controller: createIndividuDialogController,
        templateUrl: 'views/createIndividuDialog.html',
        scope: $scope.$new(),
        targetEvent: ev,
        locals: {
          isChefDeFamille: isChefDeFamille
       }
      })
      .then(function() {
        console.log('Create individu done !');
      }, function() {
        console.log('Create individu failed !');
      });
    };


    /**
     * Controller for the createIndividuDialog
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    function createIndividuDialogController($scope, $mdDialog, isChefDeFamille) {
      $scope.isChefDeFamille = isChefDeFamille;
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.createIndividu = function(individuInfos) {
      
        console.log("Creation d'un individu");
        console.log(individuInfos);
        $scope.saveIndividuInfo(individuInfos);
        $mdDialog.hide();
        // $scope.showLoadingBar();
      };
      $scope.createChefDeFamille = function(individuInfos) {

        console.log("Creation d'un chef de famille");
        console.log(individuInfos);
        $scope.saveChefDeFamilleInfo(individuInfos);
        $mdDialog.hide();

      };
    }


    $scope.saveChefDeFamilleInfo = function(chefDeFamilleInfos) {
      $scope.chefDeFamilleInfos = chefDeFamilleInfos;
    };

    $scope.saveIndividuInfo = function(individuInfos) {
      $scope.individusInfos.push(individuInfos);
    };




  }]);
