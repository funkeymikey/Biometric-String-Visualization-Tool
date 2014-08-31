(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl2', ['$scope', function($scope){
      $scope.title = "Type your name:";
      $scope.d3Data = [
        {title: "Greg", score:12},
        {title: "Ari", score:43},
        {title: "Loser", score: 87}
      ];
    }]);

}());