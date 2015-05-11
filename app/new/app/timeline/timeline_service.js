angular.module('sfTimelineService').factory('sfTimelineService',
  function() {
    var timeline_service = {}

    timeline_service.getCategories = function() {
      return {
        'All': {
          'All': []
        },
        'Beam.smp': {
          'All': ['beam'],
          'KV': ['beam', 'kv'],
          'Views': ['beam', 'query'],
          'XDCR': ['beam', 'xdcr']
        },
        'KV': {
          'All': ['kv'],
          'Latency': ['kv', 'latency'],
          'Observe': ['kv', 'observe'],
          'Warmup': ['kv', 'warmup'],
          'Memory': ['kv', 'fragmentation'],
          'BGFetcher': ['kv', 'bgfetcher'],
          'Flusher': ['kv', 'drain']
        },
        'N1QL': {
          'All': ['n1ql'],
          'Latency By Query Type': ['n1ql'],
          'Latency By Query Workload': ['n1ql'],
          'Throughput': ['n1ql']
        },
        'Rebalance': {
          'All': ['reb'],
          'Empty': ['reb', '0_kv_'],
          'KV': ['reb', 'dgm_kv'],
          'Views': ['reb', 'views'],
          'XDCR': ['reb', 'xdcr'],
          'Failover': ['reb', 'failover'],
          'Failover+Views': ['reb', 'failover', 'views']
        },
        'View Indexing': {
          'All': ['index'],
          'Initial': ['index', 'initial'],
          'Incremental': ['index', 'incremental']
        },
        'View Query': {
          'All': ['query'],
          'Bulk Latency': ['query', 'lat'],
          'Throughput': ['query', 'thr']
        },
        'Secondary Index': {
          'All': ['secondary'],
          'Initial': ['secondary', 'initial'],
          'Incremental': ['secondary', 'incremental']
        },
        'Sync Gateway': {
          'All': ['gateway']
        },
        'XDCR': {
          'All': ['xdcr'],
          'Ongoing': ['xdcr'],
          'Initial': ['xdcr']
        },
      };
    };

    timeline_service.getOses = function() {
      return ['All', 'Linux', 'Windows'];
    };

    return timeline_service;
});