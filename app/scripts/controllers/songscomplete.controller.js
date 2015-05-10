'use strict';

angular.module('Conceptum').controller('SongsCompleteController', function($scope, MusicService) {

  $scope.finish = function (information, title, comment) {
    MusicService.postMusic({
      title: title,
      comment: comment,
      soundCloudId: id,
      voicePath: path
    }).then(function () {
        // Do something
    });
  };

});
