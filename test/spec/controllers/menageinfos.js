'use strict';

describe('Controller: MenageinfosCtrl', function () {

  // load the controller's module
  beforeEach(module('laReleveApp'));

  var MenageinfosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenageinfosCtrl = $controller('MenageinfosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenageinfosCtrl.awesomeThings.length).toBe(3);
  });
});
