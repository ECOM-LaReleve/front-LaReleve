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
    'ngMaterial'
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
      .when('/menage', {
        templateUrl: 'views/menage.html',
        controller: 'MenageCtrl',
        controllerAs: 'menage'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
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
      .iconSet('action', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg', 24)
      .iconSet('home', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-home.svg', 24)
      .iconSet('alert', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-alert.svg', 24)
      .iconSet('av', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av.svg', 24)
      .iconSet('communication', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg', 24)
      .iconSet('content', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg', 24)
      .iconSet('device', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-device.svg', 24)
      .iconSet('editor', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg', 24)
      .iconSet('file', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-file.svg', 24)
      .iconSet('hardware', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
      .iconSet('image', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg', 24)
      .iconSet('maps', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-maps.svg', 24)
      .iconSet('navigation', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
      .iconSet('notification', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-notification.svg', 24)
      .iconSet('social', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .iconSet('toggle', '../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg', 24);

      // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
      //.iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
      //.defaultIconSet('../bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg', 24);
  });
