'use strict';

/**
 * @ngdoc service
 * @name laReleveApp.WebServices
 * @description
 * # WebServices
 * Service in the laReleveApp.
 */
angular.module('laReleveApp')
  .service('WebServices', function Webservices(Environments) { 	//Environments service is here because it's a dependency
  																//That's why this service is in parameter
    
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    //The list of all routes that the front can help (just an exemple, need changes)
    //TODO: Put the right routes !
    var webservicesList = {
        collab: {
           get:'/collabs',
           add:'/collabs',
           getById:'/collabs/:id',
           update:'/collabs/:id',
           getNotIn:'/collabs/notin/:ids'
        },
        dashboard:{
            get:'/dashboard'
        },
        project: {
            get:'/projects',
            add:'/projects',
            update:'/projects/:id',
            getById:'/projects/:id',
            getClients:'/clients',
            isOk:'/projects/ok/:id'
        },
        levelTechnos: {
          add:'/levelTechnos'
        },
        technos: {
            get:'/technos'
        },
        login: {
            login:'/login',
            logout:'/logout'
        },
        assignments: {
            staffing:'/assignments/details',
            assigns:'/assignments',
            update:'/assignments/:id',
            delete:'/assignments/:id',
            projectDefault: '/assignments/projects/:id',
            projectFromWeek: '/assignments/projects/:id/:week,:year',
            firstLastProject: '/assignments/projects/:id/assignments?positions=first,last',
            lastProject: '/assignments/projects/:id/assignments?positions=last',
            collabDefault: '/assignments/collabs/:id',
            collabFromWeek: '/assignments/collabs/:id/:week,:year'
        },
        utilisateurs: {
            add:'/users/add',
            delete:'/users/:id',
            list:'/users',
            get:'/utilisateurs'
        }, 
        authentication: {
            login:'/auth/login'
        }
    };

    //With the environments, we built the right url (ex: "http://localhost:8080/" + "collab.get" = http://localhost:8080/collabs)
    //This process is done for all routes and the result is put in a JS object. This service is a singleton so
    //it's done only a single time when we launch the app
    this.getWebserviceGroup = function() {
        var globalE = Environments.getEnvironment();
        var webs = angular.copy(webservicesList);
        for(var i in webs) {
            for(var key in webs[i]) {
                webs[i][key] = globalE + webs[i][key];
            }
        }
        return webs;
    };

    this.webServicesGroup = self.getWebserviceGroup();
});