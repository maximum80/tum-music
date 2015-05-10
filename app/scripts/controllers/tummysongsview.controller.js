'use strict';

angular.module('Conceptum').controller('TummysongsViewController', function($scope, $stateParams, $cordovaNativeAudio, $ionicHistory, fetchSong, SoundCloudService) {

  $scope.song = fetchSong;
  $scope.path = $stateParams.PATH;
  $scope.sound = null;

  SoundCloudService.stream($stateParams.SCID).then(function (data) {
    $scope.sound = data;
  }, function (data) {
    console.log(data);
  });

  $cordovaNativeAudio.preloadSimple('Record', $stateParams.PATH).then(function (data) {
    console.log(data);
  }, function (data) {
    console.log(data);
  });

  $scope.playRecord = function () {
    $cordovaNativeAudio.play('Record');
  };

  $scope.goBack = function () {
    $scope.sound.stop();
    $cordovaNativeAudio.unload('Record');
    $ionicHistory.goBack(-1);
  };

});
