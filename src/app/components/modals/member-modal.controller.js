(function () {
    'use strict';

    angular
        .module('app')
        .controller('MemberModalController', MemberModalController);

    MemberModalController.$inject = ['$scope', '$uibModalInstance', 'member'];

    function MemberModalController($scope, $uibModalInstance, member) {
        var vm = this;
        vm.member = member;

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
