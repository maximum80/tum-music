'use strict';

angular.module('Conceptum').controller('SongsViewController', function($scope, $stateParams, fetchSong, SoundCloudService, $cordovaCapture, $ionicHistory) {

  $scope.song = fetchSong;
  $scope.playing = false;
  $scope.sound = null;

  SoundCloudService.stream($stateParams.id).then(function (data) {
    $scope.sound = data;
  });

  $scope.record = function() {
    $cordovaCapture.captureAudio({duration: 300}).then(function(audioData) {
      console.log(audioData);
    }, function(err) {
      console.log(err);
    });
  };

  $scope.goBack = function () {
    $scope.sound.stop();
    $ionicHistory.goBack(-1);
  };

});
