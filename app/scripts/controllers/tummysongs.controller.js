'use strict';

angular.module('Conceptum').controller('TummysongsController', function($scope, SoundCloudService, $cordovaCapture) {

  $scope.music = null;

  SoundCloudService.getList({genres:"classical"}).then(function (data) {
    $scope.music = data;
  });

  $scope.play = function (id) {
    SoundCloudService.stream(id).then(function (data) {
      data.play();
    });
  };

  $scope.record = function() {
    $cordovaCapture.captureAudio({duration: 300}).then(function(audioData) {
      console.log(audioData);
    }, function(err) {
      console.log(err);
    });
  }

});
