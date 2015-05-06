angular.module('sfRuns').controller('sfRunsController',
  function($scope, test_run) {
	$scope.runs = test_run.data;
});