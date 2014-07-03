'use strict';

/**
 * @ngdoc function
 * @name angularJsProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsProjectApp
 */
angular.module('angularJsProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
