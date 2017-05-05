(function () {
    'use strict';

    angular
        .module('app')
        .controller('DirectoryController', DirectoryController);

    DirectoryController.$inject = ['$q', 'DirectoryService', 'directory', '$uibModal'];

    function DirectoryController($q, DirectoryService, directory, $uibModal) {
        var vm = this;
        vm.memberCount = directory.memberCount;
        vm.countries = directory.countries;
        vm.advancedSearchOpen = false;
        vm.pageSize = 15;
        vm.pageNumber = 0;

        vm.genericSearch = genericSearch;
        vm.advancedSearchFn = advancedSearchFn;
        vm.openMemberInfoModal = openMemberInfoModal;
        vm.loadNextPage = loadNextPage;

        function genericSearch(keyEvent) {
            if(keyEvent.which === 13) {
                vm.pageNumber = 0;
                vm.advancedSearch = {};
                DirectoryService.genericDirectoryQuery(vm.genericSearchQuery, vm.pageSize, vm.pageNumber).then(function(memberList) {
                    vm.members = memberList;
                }).catch(function(error) {
                    console.log(error);
                });
            }
        }

        function advancedSearchFn() {
            if(vm.advancedSearch.planner || vm.advancedSearch.supplier || vm.advancedSearch.faculty || vm.advancedSearch.student || vm.advancedSearch.other) {
                vm.noUserTypeSelected = false;
                vm.pageNumber = 0;
                vm.genericSearchQuery = null;
                DirectoryService.advancedDirectoryQuery(vm.advancedSearch, vm.pageSize, vm.pageNumber).then(function(memberList) {
                    vm.members = memberList;
                }).catch(function(error) {
                    console.log(error);
                });
            } else {
                vm.noUserTypeSelected = true;
            }
        }

        function openMemberInfoModal(member) {
            $uibModal.open({
                templateUrl: 'app/components/modals/member-info.html',
                controller: 'MemberModalController',
                controllerAs: 'vm',
                resolve: {
                    member: member
                }
            });
        }

        function loadNextPage() {
            vm.pageNumber++;
            // need to know what query (generic vs advanced) to use
            if(vm.genericSearchQuery) {
                DirectoryService.genericDirectoryQuery(vm.genericSearchQuery, vm.pageSize, vm.pageNumber).then(function(memberList) {
                    _.each(memberList, function(member) {
                        vm.members.push(member);
                    });
                }).catch(function(error) {
                    console.log(error);
                });
            } else if(vm.advancedSearch) {
                DirectoryService.advancedDirectoryQuery(vm.advancedSearch, vm.pageSize, vm.pageNumber).then(function(memberList) {
                    _.each(memberList, function(member) {
                        vm.members.push(member);
                    });
                }).catch(function(error) {
                    console.log(error);
                });
            }
        }
    }
})();
