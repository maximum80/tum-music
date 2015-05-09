'use strict';

angular.module('Conceptum').factory('SoundCloudService', function ($http, $q, SC, SOUNDCLOUD_ENDPOINT) {

  SC.initialize({client_id: SOUNDCLOUD_ENDPOINT.api_key});

  function getList(filter) {
    var deferred = $q.defer();

    SC.get('/tracks', filter, function (tracks) {
      deferred.resolve(tracks);
    });

    return deferred.promise;
  }

  function getInfo(fileId) {
    var deferred = $q.defer();

    SC.get('/tracks/' + fileId, function (tracks) {
      deferred.resolve(tracks);
    });

    return deferred.promise;
  }

  function stream(trackId) {
    var deferred = $q.defer();

    SC.stream("/tracks/" + trackId, function (sound) {
      deferred.resolve(sound);
    });

    return deferred.promise;
  }

  return {
    getList: getList,
    getInfo: getInfo,
    stream: stream
  };

});
