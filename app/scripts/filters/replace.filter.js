'use strict';

angular.module('Conceptum').filter('replaceImg', function () {
  return function (str) {
    return str.replace('-large.jpg', '-crop.jpg');
  };
});

