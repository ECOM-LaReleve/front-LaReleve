'use strict';

describe('Service: actionsFactory', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var actionsFactory;
  beforeEach(inject(function (_actionsFactory_) {
    actionsFactory = _actionsFactory_;
  }));

  it('should do something', function () {
    expect(!!actionsFactory).toBe(true);
  });

});
