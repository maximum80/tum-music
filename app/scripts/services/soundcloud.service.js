'use strict';

angular.module('Conceptum').factory('SoundCloudService', function ($http, $q, SC, SOUNDCLOUD_ENDPOINT) {

  SC.initialize({
    client_id: 'd59f85d0835670b50b9eaf8aa61447bd'
  });

  SC.get('/tracks', {q: 'mozart', license: 'cc-by-sa'}, function (tracks) {
    console.log(tracks);
    SC.stream("/tracks/" + tracks[0].id, function (sound) {
      sound.play();
    });
  });

  var doSomethingAsync = function () {
    var deferred = $q.defer();
    deferred.resolve.bind(null, kindOfPrivateVariable)
    return deferred.promise;
  };

  var fetchSomethingFromServer = function () {
    return $http({
      url:    'http://hipsterjesus.com/api',
      params: {
        paras: 2
      },
      method: 'GET'
    })
      .success(function (data) {
        console.log('fetched this stuff from server:', data);
      })
      .error(function (error) {
        console.log('an error occured', error);
      });
  };

  // public api
  return {
    doSomethingAsync:         doSomethingAsync,
    fetchSomethingFromServer: fetchSomethingFromServer
  };

});
