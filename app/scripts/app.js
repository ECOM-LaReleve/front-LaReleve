'use strict';

/**
 * @ngdoc overview
 * @name laReleveApp
 * @description
 * # laReleveApp
 *
 * Main module of the application.
 */
angular
  .module('laReleveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/roles', {
        templateUrl: 'views/roles.html',
        controller: 'RolesCtrl',
        controllerAs: 'roles'
      })
      .when('/menage/:id', {
        templateUrl: 'views/menage.html',
        controller: 'MenageCtrl',
        controllerAs: 'menage'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/menageCreation', {
        templateUrl: 'views/menagecreation.html',
        controller: 'MenagecreationCtrl',
        controllerAs: 'menageCreation'
      })
      .when('/menageInfos/:id', {
        templateUrl: 'views/menageinfos.html',
        controller: 'MenageinfosCtrl',
        controllerAs: 'menageInfos'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function($rootScope, $http, $location, $localStorage) {
    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/login'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !$localStorage.currentUser) {
        $location.path('/login');
      }
    });
  })

  .config(function ($httpProvider) {

    //enable CSRF
    $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
    // $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    // $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'x-requested-with';
  })


  .config(function($mdThemingProvider) {
    var customBlueMap =     $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });

    var customLimeMap =     $mdThemingProvider.extendPalette('lime', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customLime', customLimeMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('lime');
    $mdThemingProvider.theme('greenTheme')
      .primaryPalette('green');
    $mdThemingProvider.theme('redTheme')
      .primaryPalette('red');
    $mdThemingProvider.theme('greyTheme')
      .primaryPalette('grey');
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('lime', {
        'default': '50',
        'hue-1': '50'
      });
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

    $mdThemingProvider.alwaysWatchTheme(true);
  })

  .config(function($mdIconProvider) {
    $mdIconProvider
      // linking to https://github.com/google/material-design-icons/tree/master/sprites/svg-sprite
      //
      // .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
      .iconSet('action', 'material-design-icons/sprites/svg-sprite/svg-sprite-action.svg', 24)
      .iconSet('home', 'material-design-icons/sprites/svg-sprite/svg-sprite-home.svg', 24)
      .iconSet('alert', 'material-design-icons/sprites/svg-sprite/svg-sprite-alert.svg', 24)
      .iconSet('av', 'material-design-icons/sprites/svg-sprite/svg-sprite-av.svg', 24)
      .iconSet('communication', 'material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg', 24)
      .iconSet('content', 'material-design-icons/sprites/svg-sprite/svg-sprite-content.svg', 24)
      .iconSet('device', 'material-design-icons/sprites/svg-sprite/svg-sprite-device.svg', 24)
      .iconSet('editor', 'material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg', 24)
      .iconSet('file', 'material-design-icons/sprites/svg-sprite/svg-sprite-file.svg', 24)
      .iconSet('hardware', 'material-design-icons/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
      .iconSet('image', 'material-design-icons/sprites/svg-sprite/svg-sprite-image.svg', 24)
      .iconSet('maps', 'material-design-icons/sprites/svg-sprite/svg-sprite-maps.svg', 24)
      .iconSet('navigation', 'material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
      .iconSet('notification', 'material-design-icons/sprites/svg-sprite/svg-sprite-notification.svg', 24)
      .iconSet('social', 'material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .iconSet('toggle', 'material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg', 24)
      .defaultIconSet('material-design-icons/sprites/svg-sprite/svg-sprite-action.svg', 24);

      // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
      //.defaultIconSet('../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg', 24);
  });
