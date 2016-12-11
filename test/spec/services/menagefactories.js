'use strict';

describe('Service: MenageFactory', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var MenageFactory;
  beforeEach(inject(function (_MenageFactory_) {
    MenageFactory = _MenageFactory_;
  }));

  it('should do something', function () {
    expect(!!MenageFactory).toBe(true);
  });

});
