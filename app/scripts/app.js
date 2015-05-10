'use strict';

angular.module('Conceptum', ['ionic', 'ngCordova', 'ngResource', 'ngCookies']).run(function ($ionicPlatform) {

  $ionicPlatform.ready(function () {
    // save to use plugins here
  });

  // add possible global event handlers here

}).config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  // register $http interceptors, if any. e.g.
  // $httpProvider.interceptors.push('interceptor-name');

  // Application routing
  $stateProvider
    .state('app', {
      url:         '/app',
      abstract:    true,
      templateUrl: 'templates/main.html',
      controller:  'MainController'
    })

    .state('app.login', {
      url:         '/login',
      cache:       true,
      templateUrl: 'templates/views/login.html',
      controller:  'LoginController'
    })

    .state('app.path', {
      url:         '/path',
      cache:       true,
      templateUrl: 'templates/views/path.html',
      controller:  'PathController'
    })

    .state('app.category', {
      url:         '/category',
      cache:       true,
      templateUrl: 'templates/views/category.html',
      controller:  'CategoryController'
    })

    .state('app.songs', {
      url:         '/songs/:type',
      cache:       true,
      templateUrl: 'templates/views/songs.html',
      controller:  'SongsController',
      resolve: {
        fetchTracks: function ($stateParams, SoundCloudService) {
          return SoundCloudService.getList({genres: $stateParams.type, types: "original", limit: 20});
        }
      }
    })
    .state('app.songsView', {
      url:         '/songs/:id/view',
      cache:       false,
      templateUrl: 'templates/views/songs.view.html',
      controller:  'SongsViewController',
      resolve: {
        fetchSong: function ($stateParams, SoundCloudService) {
          return SoundCloudService.getInfo($stateParams.id);
        }
      }
    })
    .state('app.songsComplete', {
      url:         '/songs/complete',
      cache:       true,
      templateUrl: 'templates/views/songs.complete.html',
      controller:  'SongsCompleteController'
    })

    .state('app.tummySong', {
      url:         '/tummysongs',
      cache:       false,
      templateUrl: 'templates/views/tummysongs.html',
      controller:  'TummysongsController',
      resolve: {
        tumMusic : function (MusicService, StorageService) {
          return MusicService.getMusic(StorageService.take('userId'));
        }
      }
    })
    .state('app.tummySongView', {
      url:         '/tummysongs/:SCID/:PATH/view',
      cache:       true,
      templateUrl: 'templates/views/tummysongs.view.html',
      controller:  'TummysongsViewController',
      resolve: {
        fetchSong: function ($stateParams, SoundCloudService) {
          return SoundCloudService.getInfo($stateParams.SCID);
        }
      }
    });

  // redirects to default route for undefined routes
  $urlRouterProvider.otherwise('/app/login');
});


