'use strict';

describe('Service: ExempleFactory', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var ExempleFactory;
  beforeEach(inject(function (_ExempleFactory_) {
    ExempleFactory = _ExempleFactory_;
  }));

  it('should do something', function () {
    expect(!!ExempleFactory).toBe(true);
  });

});
