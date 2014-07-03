'use strict';

/**
 * @ngdoc function
 * @name angularJsProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsProjectApp
 */
angular.module('angularJsProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
