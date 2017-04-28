(function() {
	'use strict';

	angular
		.module('app')
		.service('SettingsService', SettingsService);

	SettingsService.$inject = ['$resource', '$q', 'config'];

	function SettingsService($resource, $q, config) {
		var service = this;
        service.getCompanyList = getCompanyList;

		function getCompanyList() {
			var url = config.apiUrl + '/api/Company/FindAll';

			var resource = $resource(url, {}, {
				'get': {
					method: 'GET',
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
