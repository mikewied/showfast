
angular.module('sfRestService', []);

angular.module('sfAdmin', []);

angular.module('sfFeed', []);

angular.module('sfReleases', []);

angular.module('sfRuns', []);

angular.module('sfTimeline', [
  'sfTimelineService'
]);

angular.module('sfTimelineService', []);

angular.module('showfast', [
  'ui.router',
  'nvd3ChartDirectives',
  'sfRestService',
  'sfAdmin',
  'sfFeed',
  'sfReleases',
  'sfRuns',
  'sfTimeline',
  'sfTimelineService'
]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/timeline');
    
  $stateProvider
  .state('timeline', {
    url: '/timeline',
    templateUrl: 'app/timeline/timeline.html',
    controller: 'sfTimelineController',
    resolve: {
      metrics: function(sfRestService) {
        return sfRestService.getMetrics();
      },
      clusters: function(sfRestService) {
        return sfRestService.getClusters();
      },
      timelines: function(sfRestService) {
        return sfRestService.getTimelines();
      }
    }
  })
  .state('runs', {
    url: 'runs?metric&build',
    templateUrl: 'app/runs/runs.html',
    controller: 'sfRunsController',
    resolve: {
      test_run: function($http, $stateParams) {
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
    templateUrl: 'app/releases/releases.html',
    controller: 'sfReleasesController',
    resolve: {
      releases: function(sfRestService) {
        return sfRestService.getReleases();
      }
    }
  })
  .state('feed', {
    url: '/feed',
    templateUrl: 'app/feed/feed.html',
    controller: 'sfFeedController',
    resolve: {
      feed: function(sfRestService) {
        return sfRestService.getFeed();
      }
    }
  })
  .state('admin', {
    url: '/admin',
    templateUrl: 'app/admin/admin.html',
    controller: 'sfAdminController',
    resolve: {
      metrics: function(sfRestService) {
        return sfRestService.getMetrics();
      },
      benchmarks: function(sfRestService) {
        return sfRestService.getBenchmarks();
      }
    }
  })
});
