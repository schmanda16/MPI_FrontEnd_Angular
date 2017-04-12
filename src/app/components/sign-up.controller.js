(function () {
    'use strict';

    angular
        .module('app')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['membershipParams', '$uibModal'];

    function SignUpController(membershipParams, $uibModal) {
        var vm = this;

        vm.selectedPlan = membershipParams;
        vm.openModal = openModal;

        vm.membershipOptions = [
            {
                category: 'Supplier',
                plans: [
                    'Basic',
                    'Advanced',
                    'Premium'
                ]
            },
            {
                category: 'Planner',
                plans: [
                    'Basic',
                    'Advanced',
                    'Premium'
                ]
            },
            {
                category: 'Faculty',
                plans: [
                    'Faculty'
                ]
            },
            {
                category: 'Student',
                plans: [
                    'Student'
                ]
            }
        ];

        function openModal() {
            $uibModal.open({
                templateUrl: 'app/components/modals/terms-and-conditions.html',
                controller: 'ModalController',
                controllerAs: 'vm'
            });
        }
    }
})();
