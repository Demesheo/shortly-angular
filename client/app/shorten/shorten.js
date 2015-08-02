angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
  	url: null
  };

  $scope.addLink = function(){
  	Links.addLink($scope.link).then(function(data){
  		console.log("our add link data ******* ", data);
  	})
  };

});
