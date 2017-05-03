(function() {
	'use strict';

	angular
		.module('app')
		.service('DirectoryService', DirectoryService);

	DirectoryService.$inject = ['$resource', '$q', 'config'];

	function DirectoryService($resource, $q, config) {
		var service = this;
        service.getDirectoryCount = getDirectoryCount;
        service.genericDirectoryQuery= genericDirectoryQuery;

        function getDirectoryCount() {
            var url = config.apiUrl + '/api/Directory/GetDirectoryCount';

            return $q(function(resolve, reject){
                var resource = $resource(url, {}, {
                    'get': {
                        method: 'GET',
                        transformResponse: function (response) {
                            resolve(parseInt(response));
                        }
                    }
                });
                return resource.get();
            });
        }

        function genericDirectoryQuery(queryString, pageSize, pageNumber) {
            var url = config.apiUrl + '/api/Directory/GenericDirectoryQuery';

            
                var resource = $resource(url, {}, {
                    'get': {
                        method: 'GET',
                        params: {
                            genericQuery: queryString,
                            pageSize: pageSize,
                            pageNumber: pageNumber
                        },
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
