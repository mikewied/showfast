angular.module('sfTimeline').controller('sfTimelineController',
  function($scope, $state, metrics, clusters, timelines, sfTimelineService) {

    $scope.selectedCategory = 'All';
    $scope.selectedSubCategory = 'All';
    $scope.categories = sfTimelineService.getCategories();
    $scope.oses = sfTimelineService.getOses();

    $scope.metrics = metrics.data;
    $scope.clusters = _.object(_.map(clusters.data, function(item) {
      return [item.Name, item]
    }));
    $scope.timelines = _.mapObject(timelines.data, function(value, key) {
      return [{'key': key, 'values': value}]
    });

    $scope.categorySelected = function(category) {
        $scope.selectedCategory = category;
        $scope.selectedSubCategory = 'All';
    }

    $scope.subCategorySelected = function(subCategory) {
        $scope.selectedSubCategory = subCategory;
    }

    $scope.byCategory = function(metric) {
        cat = $scope.selectedCategory;
        subcat = $scope.selectedSubCategory;
        for (var i in $scope.categories[cat][subcat]) {
          filter = $scope.categories[cat][subcat][i];
          if (i == 0 && !metric.id.startsWith(filter)) {
            return false;
          } else if (i != 0 && !(metric.id.indexOf(filter) !== -1)) {
            return false;
          }
        }
        return true;
    }

    $scope.$on('elementClick.directive', function(event, data) {
        $state.go('runs', {metric: data.series.key, build: data.point[0]})
    });
});