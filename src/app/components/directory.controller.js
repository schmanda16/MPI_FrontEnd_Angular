(function () {
    'use strict';

    angular
        .module('app')
        .controller('DirectoryController', DirectoryController);

    DirectoryController.$inject = [];

    function DirectoryController() {
        var vm = this;
        vm.advancedSearchOpen = false;

    }
})();
