'use strict';

angular.module('Conceptum').controller('SongsViewController', function($scope, $stateParams, fetchSong, SoundCloudService, $cordovaCapture) {

  $scope.song = fetchSong;
  $scope.playing = false;
  $scope.sound = null;

  SoundCloudService.stream($stateParams.id).then(function (data) {
    $scope.sound = data;
  });

  $scope.play = function () {
    $scope.sound.play();
  };

  $scope.record = function() {
    $cordovaCapture.captureAudio({duration: 300}).then(function(audioData) {
      console.log(audioData);
    }, function(err) {
      console.log(err);
    });
  };

});
