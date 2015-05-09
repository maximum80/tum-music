'use strict';

angular.module('Conceptum').controller('MainController', function($scope, $ionicHistory) {

   $scope.goBack = function () {
     $ionicHistory.goBack(-1);
   };

});
