'use strict';

angular.module('Conceptum').controller('TummysongsViewController', function($scope, $stateParams, $cordovaNativeAudio, fetchSong) {

  $scope.song = fetchSong;
  $scope.path = $stateParams.PATH;

  $cordovaNativeAudio.preloadSimple('Record', $stateParams.PATH).then(function (data) {
    console.log(data);
  }, function (data) {
    console.log(data);
  });

  $scope.playRecord = function () {
    $cordovaNativeAudio.play('Record');
  };

});
