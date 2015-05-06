
angular.module('sfTimeline', [
  'sfTimelineService'
]);

angular.module('sfTimelineService', []);

angular.module('sfRuns', []);

angular.module('showfast', [
  'ui.router',
  'nvd3ChartDirectives',
  'sfTimeline',
  'sfTimelineService',
  'sfRuns'
]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/timeline');
    
  $stateProvider
  .state('timeline', {
    url: '/timeline',
    templateUrl: 'app/timeline/timeline.html',
    controller: 'sfTimelineController',
    resolve: {
      metrics: function(sfTimelineService) {
        return sfTimelineService.getMetrics();
      },
      clusters: function(sfTimelineService) {
        return sfTimelineService.getClusters();
      },
      timelines: function(sfTimelineService) {
        return sfTimelineService.getTimelines();
      }
    }
  })
  .state('runs', {
    url: 'runs?metric&build',
    templateUrl: 'app/runs/runs.html',
    controller: 'sfRunsController',
    resolve: {
      test_run: function($http, $stateParams) {
        //return "Run"
        return $http({
          method: 'GET',
          url: '/all_runs',
          params: $stateParams
        });
      }
    }
  })
  .state('releases', {
    url: '/releases',
    templateUrl: 'app/releases/releases.html'
  })
  .state('feed', {
    url: '/feed',
    templateUrl: 'app/feed/feed.html'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: 'app/admin/admin.html'
  })
});
