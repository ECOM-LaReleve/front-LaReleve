'use strict';

describe('Service: IndividuFactories', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var IndividuFactories;
  beforeEach(inject(function (_IndividuFactories_) {
    IndividuFactories = _IndividuFactories_;
  }));

  it('should do something', function () {
    expect(!!IndividuFactories).toBe(true);
  });

});
