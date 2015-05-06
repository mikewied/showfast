angular.module('sfTimeline').controller('sfTimelineController',
  function($scope, $state, metrics, clusters, timelines) {

    $scope.selectedCategory = 'All';
    $scope.selectedSubCategory = 'All';
    $scope.categories = {
      'All': {
      },
      'Beam.smp': {
        'All': ['beam.smp'],
        'KV': ['beam.smp'],
        'Views': ['beam.smp'],
        'XDCR': ['beam.smp']
      },
      'KV': {
        'All': [],
        'Latency': [],
        'Observe': [],
        'Warmup': [],
        'Memory': [],
        'BGFetcher': [],
        'Flusher': []
      },
      'N1QL': {
        'All': [],
        'Latency By Query Type': [],
        'Latency By Query Workload': [],
        'Throughput': []
      },
      'Rebalance': {
        'All': [],
        'Empty': [],
        'KV': [],
        'Views': [],
        'XDCR': [],
        'Failover': [],
        'Failover+Views': []
      },
      'View Indexing': {
        'All': [],
        'Initial': [],
        'Incremental': []
      },
      'View Query': {
        'All': [],
        'Bulk Latency': [],
        'Latency By Query Type': [],
        'Throughput': []
      },
      'Secondary Index': {
        'All': [],
        'Initial': [],
        'Incremental': []
      },
      'Sync Gateway': {
      },
      'XDCR': {
        'All': [],
        'Ongoing': [],
        'Initial': []
      },
    }

    $scope.metrics = metrics.data;
    $scope.clusters = _.object(_.map(clusters.data, function(item) {
      return [item.Name, item]
    }));
    $scope.timelines = _.mapObject(timelines.data, function(value, key) {
      return [{'key': key, 'values': value}]
    });

    $scope.categorySelected = function(category) {
        $scope.selectedCategory = category;
        console.log("Category " + category + " selected");
    }

    $scope.subCategorySelected = function(subCategory) {
        $scope.selectedSubCategory = subCategory;
        console.log("Sub-category " + subCategory + " selected");
    }

    $scope.$on('elementClick.directive', function(event, data) {
        console.log(data.series.key);
        console.log(data.point[0]);
        var build = data.point[0],
            metric = data.series.key,
            a = $("#run_"  + metric);
        $state.go('runs', {metric: metric, build: build})
    });
});