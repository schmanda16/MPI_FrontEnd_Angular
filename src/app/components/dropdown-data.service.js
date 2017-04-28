(function() {
	'use strict';

	angular
		.module('app')
		.service('DropdownDataService', DropdownDataService);

	function DropdownDataService() {
		var service = this;
        service.getGenderList = getGenderList;
        service.getJobClassificationList = getJobClassificationList;
		service.getCompanyList = getCompanyList;
        service.getIndustryList = getIndustryList;
        service.getCountryCodeList = getCountryCodeList;
        service.getCountryList = getCountryList;

        function getGenderList() {
            return [
                {
                    id: 0,
                    name: 'Male'
                },
                {
                    id: 1,
                    name: 'Female'
                },
                {
                    id: 2,
                    name: 'Prefer not to answer'
                }
            ];
        }
        function getJobClassificationList() {
            return [
                {
                    id: 0,
                    name: 'Staff'
                },
                {
                    id: 1,
                    name: 'Manager'
                },
                {
                    id: 2,
                    name: 'Executive'
                }
            ];
        }

		function getCompanyList() {
            return [
                {
                    id: 0,
                    name: 'Credera'
                },
                {
                    id: 1,
                    name: 'MPI'
                },
                {
                    id: 2,
                    name: 'Baylor Scott & White'
                },
                {
                    id: 3,
                    name: 'PepsiCo'
                },
                {
                    id: 4,
                    name: 'Accenture'
                },
                {
                    id: 5,
                    name: 'American Airlines'
                },
                {
                    id: 6,
                    name: 'HP'
                },
                {
                    id: 7,
                    name: 'Facebook'
                },
                {
                    id: 8,
                    name: 'State Farm'
                },
                {
                    id: 9,
                    name: 'Dallas ISD'
                },
                {
                    id: 10,
                    name: 'The Perot Museum of Nature and Science'
                }
            ];
        }

        function getIndustryList() {
            return [
                {
                    id: 0,
                    country: 'Accounting'
                },
                {
                    id: 1,
                    name: 'Construction'
                },
                {
                    id: 2,
                    name: 'Defense'
                },
                {
                    id: 3,
                    name: 'Education'
                },
                {
                    id: 4,
                    name: 'Energy'
                },
                {
                    id: 5,
                    name: 'Food & Beverage'
                },
                {
                    id: 6,
                    name: 'Law'
                },
                {
                    id: 7,
                    name: 'Oil & Gas'
                },
                {
                    id: 8,
                    name: 'Real Estate'
                },
                {
                    id: 9,
                    name: 'Sports'
                },
                {
                    id: 10,
                    name: 'Technology'
                }
            ];
        }

        function getCountryCodeList() {
            return [
                {
                    id: 0,
                    country: 'Argentina',
                    code: '54'
                },
                {
                    id: 1,
                    country: 'Belize',
                    code: '501'
                },
                {
                    id: 2,
                    country: 'Denmark',
                    code: '45'
                },
                {
                    id: 3,
                    country: 'France',
                    code: '33'
                },
                {
                    id: 4,
                    country: 'India',
                    code: '91'
                },
                {
                    id: 5,
                    country: 'Japan',
                    code: '81'
                },
                {
                    id: 6,
                    country: 'Kenya',
                    code: '254'
                },
                {
                    id: 7,
                    country: 'Romania',
                    code: '40'
                },
                {
                    id: 8,
                    country: 'United States of America',
                    code: '1'
                },
                {
                    id: 9,
                    country: 'United Kingdom',
                    code: '44'
                },
                {
                    id: 10,
                    country: 'New Zealand',
                    code: '64'
                }
            ];
        }

        function getCountryList() {
            return [
                {
                    id: 0,
                    country: 'Argentina'
                },
                {
                    id: 1,
                    country: 'Belize'
                },
                {
                    id: 2,
                    country: 'Denmark'
                },
                {
                    id: 3,
                    country: 'France'
                },
                {
                    id: 4,
                    country: 'India'
                },
                {
                    id: 5,
                    country: 'Japan'
                },
                {
                    id: 6,
                    country: 'Kenya'
                },
                {
                    id: 7,
                    country: 'Romania'
                },
                {
                    id: 8,
                    country: 'United States of America'
                },
                {
                    id: 9,
                    country: 'United Kingdom'
                },
                {
                    id: 10,
                    country: 'New Zealand'
                }
            ];
        }

		return service;
	}
})();
