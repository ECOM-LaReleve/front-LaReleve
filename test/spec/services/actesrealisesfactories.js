'use strict';

describe('Service: ActesRealisesFactories', function () {

  // load the service's module
  beforeEach(module('laReleveApp'));

  // instantiate service
  var ActesRealisesFactories;
  beforeEach(inject(function (_ActesRealisesFactories_) {
    ActesRealisesFactories = _ActesRealisesFactories_;
  }));

  it('should do something', function () {
    expect(!!ActesRealisesFactories).toBe(true);
  });

});
