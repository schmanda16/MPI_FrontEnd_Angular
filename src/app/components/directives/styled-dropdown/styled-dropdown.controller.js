(function () {
    'use strict';

    angular
        .module('app')
        .controller('StyledDropdownController', StyledDropdownController);

    function StyledDropdownController() {
        var vm = this;
        vm.selectOption = selectOption;

        function selectOption(item) {
            vm.value = item;
            if (vm.changeCallback) {
                vm.changeCallback({item: item});
            }
        }
    }
})();
