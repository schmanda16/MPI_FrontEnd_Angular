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
        service.advancedDirectoryQuery = advancedDirectoryQuery;

        function getDirectoryCount() {
            // var url = config.apiUrl + '/api/Directory/GetDirectoryCount';

            // return $q(function(resolve, reject){
            //     var resource = $resource(url, {}, {
            //         'get': {
            //             method: 'GET',
            //             transformResponse: function (response) {
            //                 resolve(parseInt(response));
            //             }
            //         }
            //     });
            //     return resource.get();
            // });


            var url = config.apiUrl + '/api/Directory/GetDirectoryCount';
            var resource = $resource(url, {}, {
                'get': {
                    method: 'GET',
                    transformResponse: function (response) {
                        if(typeof(response) !== "object") {
                            var data = {memberCount: response};
                        }
                        return data;
                    }
                }
            });
            return resource.get().$promise;
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

        
        //string nameQuery, string companyQuery, string cityQuery, int? chapterIdQuery, string countryQuery, bool isPlanner, bool isSupplier, bool isFaculty, bool isStudent, bool isOther
        function advancedDirectoryQuery(advancedQuery, pageSize, pageNumber) {
            var url = config.apiUrl + '/api/Directory/AdvancedDirectoryQuery';
            var resource = $resource(url, {}, {
                'get': {
                    method: 'GET',
                    params: {
                        nameQuery: advancedQuery.name?advancedQuery.name:'',
                        companyQuery: advancedQuery.company?advancedQuery.company:'',
                        cityQuery: advancedQuery.city?advancedQuery.city:'',
                        chapterIdQuery: null,
                        countryQuery: '',
                        isPlanner: advancedQuery.planner,
                        isSupplier: advancedQuery.supplier,
                        isFaculty: advancedQuery.faculty,
                        isStudent: advancedQuery.student,
                        isOther: advancedQuery.other,
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
