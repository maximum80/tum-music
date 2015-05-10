'use strict';

angular.module('Conceptum').factory('StorageService', function ($cookieStore) {
  return {
    push : function (key, value) {
      return $cookieStore.put(key, value);
    },
    take : function (key) {
      return $cookieStore.get(key);
    },
    remove : function (key) {
      delete $cookieStore.remove(key);
    }
  };
});

