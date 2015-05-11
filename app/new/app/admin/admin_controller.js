angular.module('sfAdmin').controller('sfAdminController',
  function($scope, metrics, benchmarks) {
	$scope.metrics = metrics.data;
    $scope.benchmarks = benchmarks.data;
    console.log($scope.benchmarks);
});