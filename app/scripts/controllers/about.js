define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name demoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the demoApp
   */
  angular.module('demoApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
