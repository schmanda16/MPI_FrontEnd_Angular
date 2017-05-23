(function () {
    'use strict';

    angular
        .module('app')
        .controller('StyledUiSelectController', StyledUiSelectController);

    function StyledUiSelectController() {
        var vm = this;

        vm.parentRefreshCallback = parentRefreshCallback;
        vm.selectOption = selectOption;

        function parentRefreshCallback(value) {
            vm.refreshCallback({value: value ? value : ""});
        }

        function selectOption(item) {
            if (vm.changeCallback) {
                vm.changeCallback({item: item});
            }
        }
    }

})();
