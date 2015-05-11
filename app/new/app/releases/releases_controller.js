angular.module('sfReleases').controller('sfReleasesController',
  function($scope, releases, sfRestService) {
	$scope.baselines = releases.data;
    $scope.targets = releases.data;

    $scope.selectedBaseline = $scope.baselines[0];
    $scope.selectedTarget = $scope.targets[0];

    compare($scope.baselines[0], $scope.targets[0])

    $scope.setSelectedBaseline = function (value) {
      $scope.selectedBaseline = value;
      compare($scope.selectedBaseline, $scope.selectedTarget);
    };

    $scope.setSelectedTarget = function (value) {
      $scope.selectedTarget = value;
      compare($scope.selectedBaseline, $scope.selectedTarget);
    };

    function compare(baseline, target) {
      sfRestService.getComparison(baseline, target)
        .success(function(data) {
          $scope.metrics = data;
        });
    }
});