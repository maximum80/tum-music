'use strict';

angular.module('Conceptum').controller('SongsCompleteController', function($scope, $state, MusicService, StorageService) {

  $scope.finish = function (title, comment) {
    var TITLE = title || "Tummy Song";
    var COMMENT = comment || "This is a dummy tummy song!";
    var SCID = StorageService.take("SCID");
    var PATH = _.isUndefined(StorageService.take("recordPath")) ? "/empty" : StorageService.take("recordPath");

    if (!_.isUndefined(SCID)) {
      MusicService.postMusic({
        title: TITLE,
        comment: COMMENT,
        soundCloudId: SCID,
        voicePath: PATH
      }, StorageService.take('userId')).then(function () {
        $state.go('app.path');
      });
    }
  };

});
