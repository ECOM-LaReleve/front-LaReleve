'use strict';

describe('Service: PrestationsRealiseesFactories', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var PrestationsRealiseesFactories;
  beforeEach(inject(function (_PrestationsRealiseesFactories_) {
    PrestationsRealiseesFactories = _PrestationsRealiseesFactories_;
  }));

  it('should do something', function () {
    expect(!!PrestationsRealiseesFactories).toBe(true);
  });

});
