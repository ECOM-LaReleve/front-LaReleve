'use strict';

describe('Controller: MenageCtrl', function () {

  // load the controller's module
  beforeEach(module('laReleveApp'));

  var MenageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenageCtrl = $controller('MenageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenageCtrl.awesomeThings.length).toBe(3);
  });
});
