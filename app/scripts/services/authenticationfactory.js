'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.AuthenticationFactory
 * @description
 * # AuthenticationFactory
 * Factory in the laReleveApp.
 */
 angular.module('laReleveApp')
 .factory('AuthenticationFactory', function ($http, $localStorage, WebServices) {
    // Service logic
    

    var service = {};


    function Login(username, password, callback) {
      $http.post(WebServices.webServicesGroup.authentication.login, { username: username, password: password })
      .success(function (response) {
        // login successful if there's a token in the response
        if (response.token) {
        // store username and token in local storage to keep user logged in between page refreshes
        $localStorage.currentUser = { username: username, token: response.token };

        // add jwt token to auth header for all requests made by the $http service
        $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

        // execute callback with true to indicate successful login
        callback(true);
        } else {
        // execute callback with false to indicate failed login
        callback(false);
        }
      });
    }

    function Logout() {
      // remove user from local storage and clear http auth header
      delete $localStorage.currentUser;
      $http.defaults.headers.common.Authorization = '';
    }


    service.Login = Login;
    service.Logout = Logout;

    return service;

    // var meaningOfLife = 42;

    // // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };
  });
