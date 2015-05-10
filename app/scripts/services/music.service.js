'use strict';

angular.module('Conceptum').factory('MusicService', function ($http, $q, API_ENDPOINT) {

  function getMusic(id) {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/music/" + id,
      method : "GET"
    }).success(function (data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  function postMusic(music, id) {
    var deferred = $q.defer();

    $http({
      url : API_ENDPOINT.host + "/music/" + id,
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

