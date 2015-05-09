'use strict';

angular.module('Conceptum').constant('API_ENDPOINT', {
  host:      'http://localhost',
  port:      3000,
  path:      '',
  needsAuth: false
}).constant('SOUNDCLOUD_ENDPOINT', {
  host:       'https://soundcloud.com/connect',
  token:      'https://api.soundcloud.com/oauth2/token',
  port:       3000,
  path:       '',
  needsAuth:  false,
  api_key:    'd59f85d0835670b50b9eaf8aa61447bd',
  api_secret: '3c314f6c2220a6937037cb9ee08c0a1c'
});
