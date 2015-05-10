'use strict';

angular.module('Conceptum').factory('MusicService', function ($http, $q, API_ENDPOINT) {

  function getMusic() {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/music",
      method : "GET"
    }).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  function postMusic(music) {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/music",
      method : "POST",
      data: angular.toJson(music)
    }).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  return {
    getMusic: getMusic,
    postMusic: postMusic
  };

});

