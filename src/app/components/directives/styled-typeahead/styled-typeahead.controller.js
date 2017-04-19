(function () {
    'use strict';

    angular
        .module('app')
        .controller('StyledTypeaheadController', StyledTypeaheadController);

    StyledTypeaheadController.$inject = [];

    function StyledTypeaheadController() {
        var vm = this;
        vm.selectOption = selectOption;

        vm.hasFocus = function () {
            vm.focus = true;
        };

        vm.lostFocus = function () {
            vm.focus = false;
        };

        function selectOption(item) {
            if (vm.changeCallback) {
                vm.changeCallback(item);
            }
            vm.lastVal = vm.value;
        }
    }
})();
