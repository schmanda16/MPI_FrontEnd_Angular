(function () {
    'use strict';

    angular
        .module('app')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = [];

    function SettingsController() {
        var vm = this;
        vm.selectedTabIndex = 0;
        vm.industryChanged = industryChanged;

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

        function industryChanged(item) {
        }
    }
})();
