(function () {
    'use strict';

    angular
        .module('app')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$q', 'SettingsService', 'profile', 'DataRetrievalService'];

    function SettingsController($q, SettingsService, profile, DataRetrievalService) {
        var vm = this;
        vm.selectedTabIndex = 0;
        vm.changeGender = changeGender;
        vm.saveGeneralInformation = saveGeneralInformation;
        vm.saveContactInformation = saveContactInformation;

        vm.person = profile.person;
        vm.functionRoles = profile.functionRoles;
        //vm.companies = profile.companies;
        vm.industries = profile.industries;
        vm.countries = profile.countries;
        vm.genders = [
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
                name: 'Unknown'
            }
        ];

        vm.person.hasOtherDesignation = false;

        activate();

        function activate() {

            var companiesPromise =  DataRetrievalService.findSet('Company', null).then(function(companyList) {
                vm.companies = companyList;
            }).catch(function (error) {
                //error
            });

            if(vm.person && vm.person.other) {
                vm.person.hasOtherDesignation = true;
            }
            if(vm.person && vm.person.gender) {
                vm.person.genderObject = _.find(vm.genders, function(gender) {
                    return gender.id === vm.person.gender;
                });
            }
        }

        function changeGender(item) {
            vm.person.gender = item.id;
        }

        function saveGeneralInformation() {
            if(vm.generalInformationForm.$dirty && vm.generalInformationForm.$valid) {
                console.log('general information saved');
            }
        }

        function saveContactInformation() {
            console.log('contact information saved');
        }
    }
})();
