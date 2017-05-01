(function () {
    'use strict';

    angular
        .module('app')
        .controller('styledUiSelectController', styledUiSelectController);

    function styledUiSelectController() {
        var vm = this;

        //vm.lastVal = vm.value;
        vm.selectOption = selectOption;

        function selectOption(item) {
            /*if (vm.changeCallback && (!vm.lastVal || (vm.lastVal && !vm.value) || vm.lastVal[vm.itemDisplayKey] !== vm.value[vm.itemDisplayKey])) {
                var lastVal = vm.lastVal;
                vm.changeCallback({item: item, lastVal: vm.lastVal});
            }*/
            if (vm.changeCallback) {
                vm.changeCallback({item: item});
            }
            //vm.lastVal = vm.value;
        }
    }

})();
