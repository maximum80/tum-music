'use strict';

angular.module('Conceptum').controller('TummysongsViewController', function($scope, fetchSong) {

  $scope.music = fetchSong;

});
