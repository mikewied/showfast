angular.module('sfTimelineService').factory('sfTimelineService',
  function($http) {
    var timeline_service = {}

    timeline_service.getMetrics = function() {
      return $http({
        method: 'GET',
        url: '/all_metrics'
      });
    }

    timeline_service.getClusters = function() {
      return $http({
        method: 'GET',
        url: '/all_clusters'
      });
    }

    timeline_service.getTimelines = function() {
      return $http({
        method: 'GET',
        url: '/all_timelines'
      });
    }

    return timeline_service;
});