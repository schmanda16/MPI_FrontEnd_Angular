(function () {
    'use strict';

    angular
        .module('app')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$scope', '$uibModalInstance'];

    function ModalController($scope, $uibModalInstance) {
        var vm = this;

		vm.close = close;
		vm.dismiss = dismiss;

		function close() {
            $uibModalInstance.close({});
        }

        function dismiss() {
            $uibModalInstance.dismiss({});
        }
    }
})();
