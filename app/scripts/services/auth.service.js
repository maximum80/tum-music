'use strict';

angular.module('Conceptum').factory('ApiService', function ($window, $http, API_ENDPOINT) {

  var _api     = API_ENDPOINT;
  var endpoint = _api.port ? (_api.host + ':' + _api.port + _api.path) : (_api.host + _api.path);

  // public api
  return {
    getEndpoint: function () {
      return endpoint;
    }
  };

});

