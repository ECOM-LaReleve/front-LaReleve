'use strict';

describe('Service: ServicesFactories', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var ServicesFactories;
  beforeEach(inject(function (_ServicesFactories_) {
    ServicesFactories = _ServicesFactories_;
  }));

  it('should do something', function () {
    expect(!!ServicesFactories).toBe(true);
  });

});
