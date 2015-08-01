angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
  	data : null
  };
  $scope.addLink = function(link){
  	Links.addLink().then(function(data){
  		console.log(data);
  		$scope.link.data = data;
  	})
  };

});
