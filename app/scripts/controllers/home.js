'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('HomeCtrl', ['$scope', '$mdDialog', 'ExempleFactory', 'BesoinsFactory', 'ActesFactory', 'PrestationsFactory', 'CreateIndividuFactory', function ($scope, $mdDialog, ExempleFactory, BesoinsFactory, ActesFactory, PrestationsFactory, CreateIndividuFactory) {

    
    $scope.menagesList();

    $scope.besoinsList();

    $scope.actesList();

    $scope.prestationsList();


    /**
     * Send the new individu to the server
     * @param {[type]}
     */
    $scope.addIndividu = function(individu) {
      console.log(individu);
      CreateIndividuFactory.createIndividu(individu,
        function(individu) {
          console.log('Individu ' + individu + ' successfully added !');
        }, function() {
          console.log('Individu creation failed!');
        }
      );
    };


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
        console.log('Individu saved !');
      }, function() {
        console.log('individu saving failed !');
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
        $scope.saveIndividuInfo(individuInfos);
        $mdDialog.hide();
        // $scope.showLoadingBar();
      };
      $scope.createChefDeFamille = function(individuInfos) {

        console.log("Creation d'un chef de famille");
        $scope.saveChefDeFamilleInfo(individuInfos);
        $mdDialog.hide();

      };
    }


    $scope.saveChefDeFamilleInfo = function(chefDeFamilleInfos) {
      $scope.chefDeFamilleInfos = chefDeFamilleInfos;
    };

    $scope.saveIndividuInfo = function(individuInfos) {
      $scope.addIndividu(individuInfos);
    };




  }]);
