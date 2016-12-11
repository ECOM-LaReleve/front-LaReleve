'use strict';

/**
 * @ngdoc function
 * @name laReleveApp.controller:MenageCtrl
 * @description
 * # MenageCtrl
 * Controller of the laReleveApp
 */
angular.module('laReleveApp')
  .controller('MenageCtrl', ['$scope', '$q', '$timeout', '$mdDialog', '$routeParams', function ($scope, $q, $timeout, $mdDialog, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log($routeParams.id);


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
