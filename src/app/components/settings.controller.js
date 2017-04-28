(function () {
    'use strict';

    angular
        .module('app')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$q', 'SettingsService', 'profile'];

    function SettingsController($q, SettingsService, profile) {
        var vm = this;
        vm.selectedTabIndex = 0;
        vm.saveGeneralInformation = saveGeneralInformation;
        vm.saveContactInformation = saveContactInformation;

        vm.person = profile.person;
        vm.companies = profile.companies;

        vm.industries = [
            {
                name: 'Accounting'
            },
            {
                name: 'Construction'
            },
            {
                name: 'Defense'
            },
            {
                name: 'Education'
            },
            {
                name: 'Energy'
            },
            {
                name: 'Food & Beverage'
            },
            {
                name: 'Law'
            },
            {
                name: 'Oil & Gas'
            },
            {
                name: 'Real Estate'
            },
            {
                name: 'Sports'
            },
            {
                name: 'Technology'
            }
        ];

        /*vm.companies = [
            {
                name: 'Credera'
            },
            {
                name: 'MPI'
            },
            {
                name: 'PepsiCo'
            },
            {
                name: 'Sysco'
            },
            {
                name: 'PwC'
            },
            {
                name: 'Will Reed Jobs'
            },
            {
                name: 'Baylor Scott & White'
            },
            {
                name: 'Pappas Restaurants'
            },
            {
                name: 'Remax'
            },
            {
                name: 'San Antonio Spurs'
            }
        ];*/

        function saveGeneralInformation() {
            console.log('general information saved');
        }

        function saveContactInformation() {
            console.log('contact information saved');
        }
    }
})();

// FunctionRole = Job Classification