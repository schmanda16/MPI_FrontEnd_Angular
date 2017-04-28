(function() {
	'use strict';

	angular
		.module('app')
		.service('SettingsService', SettingsService);

	SettingsService.$inject = ['$resource', '$q', 'config'];

	function SettingsService($resource, $q, config) {
		var service = this;
        service.getPersonByUserId = getPersonByUserId;
        service.getCompanyList = getCompanyList;

        function getPersonByUserId(userId) {
            var url = config.apiUrl + '/api/Profile/GetPersonProfile';

			var resource = $resource(url, {}, {
				'get': {
					method: 'GET',
                    params: {
                        userId: userId
                    },
                    transformResponse: function (response) {
						return response?angular.fromJson(response):null;
					}
				}
			});

			return resource.get().$promise;
        }

		function getCompanyList() {
			var url = config.apiUrl + '/api/Company/FindAll';

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
