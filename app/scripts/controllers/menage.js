'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:MenageCtrl
 * @description
 * # MenageCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('MenageCtrl', ['$scope', '$q', '$timeout', '$mdDialog', '$routeParams', 'PrestationsRealiseesByMenageFactory', 'ActesRealisesByMenageFactory', 'MenagesByIdFactory', 'IndividusByMenageIdFactory', function ($scope, $q, $timeout, $mdDialog, $routeParams, PrestationsRealiseesByMenageFactory, ActesRealisesByMenageFactory, MenagesByIdFactory, IndividusByMenageIdFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var id = $routeParams.id;

     /**
     * Initialize prestations realisees list by id menage
     */
    $scope.prestationRealiseesListByIdMenage = function(id) {
       PrestationsRealiseesByMenageFactory.getPrestationsRealiseesByMenage({id:id},function (prestations){
        prestations.$promise.then(function(prestations) {
          $scope.prestations = prestations;

          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };

    /**
     * Initialize actes realises list by id menage
     */
    $scope.actesRealisesListByIdMenage = function(id) {
       ActesRealisesByMenageFactory.getActesRealisesByMenage({id:id},function (actes){
        actes.$promise.then(function(actes) {
          $scope.actes = actes;

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
          //Hide the loading bar when the data are available
          //$scope.hideLoadingBar();
        });
      });
    };

    $scope.prestationRealiseesListByIdMenage(id);
    $scope.actesRealisesListByIdMenage(id);
    $scope.infoMenageById(id);
    $scope.getIndividusFromMenageById(id);


    /**
     * Show the dialog to create a new acte to the database
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    $scope.showAddActe = function(ev) {
      $mdDialog.show({
        controller: addActeDialogController,
        templateUrl: 'views/addactedialog.html',
        scope: $scope.$new(),
        targetEvent: ev
      })
      .then(function() {
        console.log('Add acte done !');
      }, function() {
        console.log('Add acte failed !');
      });
    };


    /**
     * Controller for the addActeDialog
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    function addActeDialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.addActe = function(acte) {
      
        console.log("Creation d'un acte");
        console.log(acte);
        // $scope.saveIndividuInfo(individuInfos);
        // $mdDialog.hide();
        // $scope.showLoadingBar();
      };
    }



  }]);
