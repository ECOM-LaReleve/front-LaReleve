'use strict';

describe('Controller: MenagecreationCtrl', function () {

  // load the controller's module
  beforeEach(module('laReleveApp'));

  var MenagecreationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenagecreationCtrl = $controller('MenagecreationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenagecreationCtrl.awesomeThings.length).toBe(3);
  });
});
