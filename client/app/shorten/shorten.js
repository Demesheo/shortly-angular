angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
  	Links.addLink().then(function(data){
  		$scope.link[data] = data;
  	})
  };

});
