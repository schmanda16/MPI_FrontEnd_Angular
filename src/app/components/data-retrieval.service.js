(function() {
	'use strict';

	angular
		.module('app')
		.service('DataRetrievalService', DataRetrievalService);

	DataRetrievalService.$inject = ['$resource', '$q', 'config'];

	function DataRetrievalService($resource, $q, config) {
		var service = this;
        service.findAll = findAll;

		function findAll(entityType) {
			var url = config.apiUrl + '/api/' + entityType + '/FindAll';

			var resource = $resource(url, {}, {
				'get': {
					method: 'GET',
                    isArray: true,
                    transformResponse: function (response) {
						return response?angular.fromJson(response):null;
					}
				}
			});

			return resource.get().$promise;
		}

		return service;
	}
})();
