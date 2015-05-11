angular.module('sfFeed').controller('sfFeedController',
  function($scope, feed) {
	$scope.records = feed.data;
});