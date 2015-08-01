angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
  	url: null
  };

  $scope.addLink = function(field){
  	console.log('link', field);
  		$scope.link.url = field;
  	Links.addLink($scope.link).then(function(data){
  		console.log("our add link data ******* ", data);
  	})
  };

});
