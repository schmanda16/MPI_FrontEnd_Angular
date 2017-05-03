(function () {
    'use strict';

    angular
        .module('app')
        .controller('DirectoryController', DirectoryController);

    DirectoryController.$inject = ['$q', 'DirectoryService', 'directory'];

    function DirectoryController($q, DirectoryService, directory) {
        var vm = this;
        vm.memberCount = directory.memberCount;
        vm.advancedSearchOpen = false;
        vm.pageSize = 15;
        vm.pageNumber = 0;

        vm.genericSearch = genericSearch;

        function genericSearch(keyEvent) {
            if(keyEvent.which === 13) {
                console.log('making a generic query: ' + vm.genericSearchQuery);
                DirectoryService.genericDirectoryQuery(vm.genericSearchQuery, vm.pageSize, vm.pageNumber).then(function(memberList) {
                    vm.members = memberList;
                }).catch(function(error) {
                    console.log(error);
                });
            }
        }
    }
})();
