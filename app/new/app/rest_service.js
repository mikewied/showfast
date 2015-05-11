angular.module('sfRestService').factory('sfRestService',
  function($http) {
    var rest_service = {};

    rest_service.getMetrics = function() {
      return httpGetRequest('/all_metrics');
    };

    rest_service.getClusters = function() {
      return httpGetRequest('/all_clusters');
    };

    rest_service.getTimelines = function() {
      return httpGetRequest('/all_timelines');
    };

    rest_service.getFeed = function() {
      return httpGetRequest('/all_feed_records');
    };

    rest_service.getReleases = function() {
      return httpGetRequest('/all_releases');
    };

    rest_service.getComparison = function(baseline, target) {
      return httpGetRequest('/get_comparison', {
        'baseline': baseline,
        'target': target
      });
    };

    rest_service.getBenchmarks = function() {
      return httpGetRequest('/all_benchmarks');
    };

    function httpGetRequest(url, params) {
      return $http({
        method: 'GET',
        url: url,
        params: params
      });
    }

    return rest_service;
});