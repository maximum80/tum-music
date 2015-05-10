'use strict';

angular.module('Conceptum').controller('LoginController', function($scope, $state, StorageService, AuthService) {

    $scope.signin = function (email, pass) {
      AuthService.login(email, pass).then(function (data) {
        console.log(data);
        if (data.user) {
          StorageService.push('userId', data.user.id);
          $state.go("app.path");
        }
      });
    };

});
