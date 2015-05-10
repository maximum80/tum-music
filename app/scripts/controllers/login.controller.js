'use strict';

angular.module('Conceptum').controller('LoginController', function($scope, $state, AuthService) {

    $scope.signin = function (email, pass) {
      AuthService.login(email, pass).then(function (data) {
        console.log(data);
        if (data.user) {
          $state.go("app.path");
        }
      });
    };

});
