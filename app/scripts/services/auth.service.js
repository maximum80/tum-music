'use strict';

angular.module('Conceptum').factory('AuthService', function ($http, $q, API_ENDPOINT) {

  function login(email, pass) {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/login",
      method : "POST",
      data: angular.toJson({
        email : email,
        password: pass
      })
    }).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  function register(email, pass, name) {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/user",
      method : "POST",
      data: angular.toJson({
        email : email,
        password: pass,
        name: name
      })
    }).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  function logout() {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/logout",
      method : "GET"
    }).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  return {
    login : login,
    register : register,
    logout : logout
  };

});

