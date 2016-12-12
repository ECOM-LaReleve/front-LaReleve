'use strict';

describe('Service: UserFactories', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var UserFactories;
  beforeEach(inject(function (_UserFactories_) {
    UserFactories = _UserFactories_;
  }));

  it('should do something', function () {
    expect(!!UserFactories).toBe(true);
  });

});
