'use strict';

angular.module('Conceptum').controller('SongsController', function($scope, $stateParams, fetchTracks) {

  $scope.music = fetchTracks;
  $scope.type = $stateParams.type;

});
