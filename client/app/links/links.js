angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };
  // console.log(Links);

  $scope.getLinks = function(){

  	// $scope.data.links = data;
  	Links.getLinks().then(function(data){
      $scope.data.links.push(data);
    });

  };

  $scope.init = function(){
  	$scope.getLinks();
  }
  $scope.init();
});