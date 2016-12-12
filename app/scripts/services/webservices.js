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
      utilisateurs:{
        get:'/utilisateurs',
        getById:'/utilisateurs/:id',
        getByService:'/utilisateurs?idservice=:id'
     },
      besoins: {
       get:'/besoins',
       getById:'/besoins/:id'
     },
      services: {
       get:'/services'
     },
      actes: {
       get:'/actes',
       getById:'/actes/:id'
     },
      prestations: {
       get:'/prestations',
       getById:'/prestations/:id',
       getByService:'/prestations?idservice=:id'
     },
      individus: {
        get:'/individus',
        create:'/individus',
        getById:'/individus/:id',
        getByMenageId:'/individus?idmenage=:id',
        getMenageByName:'/individus?menage=:name'
     },
      menages: {
        get:'/menages',
        create:'/menages',
        getById:'/menages/:id',
        getByReferantId:'/menages?idreferant=:id'
     },
      prestationsrealisees: {
        get:'/prestationsrealisees',
        create:'/prestationsrealisees',
        getById:'/prestationsrealisees/:id',
        getByMenageId:'/prestationsrealisees?idmenage=:id',
        getByIndividuId:'/prestationsrealisees?idindividu=:id',
        getByUtilisateurId:'/prestationsrealisees?idutilisateur=:id',
        getByPrestationId:'/prestationsrealisees?idprestation=:id'
     },
      actesrealises: {
        get:'/actesrealises',
        create:'/actesrealises',
        getById:'/actesrealises/:id',
        getByMenageId:'/actesrealises?idmenage=:id',
        getByIndividuId:'/actesrealises?idindividu=:id',
        getByUtilisateurId:'/actesrealises?idutilisateur=:id',
        getByActeId:'/actesrealises?idacte=:id',
        getByBesoinId:'/actesrealises?idbesoin=:id',
        getByPrestationId:'/actesrealises?idprestation=:id'
     },
      authentication: {
       login:'/auth/login'
     }
  };

    //With the environments, we built the right url (ex: "http://localhost:8080/" + "besoins.get" = http://localhost:8080/besoins)
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