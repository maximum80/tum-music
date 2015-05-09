'use strict';

/**
 * @ngdoc function
 * @name Conceptum.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Conceptum')
  .controller('HomeController', function($scope, ExampleService) {

    $scope.myHTML = null;

    // just an example...
    $scope.fetchRandomText = function() {
      ExampleService.doSomethingAsync()
        .then(ExampleService.fetchSomethingFromServer)
        .then(function(response) {
            $scope.myHTML = response.data.text;
            // close pull to refresh loader
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchRandomText();

  });
