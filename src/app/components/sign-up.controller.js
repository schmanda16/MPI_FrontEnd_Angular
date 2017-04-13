(function () {
    'use strict';

    angular
        .module('app')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['membershipParams', '$uibModal'];

    function SignUpController(membershipParams, $uibModal) {
        var vm = this;

        // Variables
        vm.selectedPlan = membershipParams;
        vm.loggedIn = false;
        vm.confirmInfo = false;
        vm.addressFlag = true;
        vm.pricingRadio = 'Yearly';

        // Functions
        vm.openModal = openModal;
        vm.signUp = signUp;
        vm.continueCheckout = continueCheckout;
        vm.confirmCheckout = confirmCheckout;

        activate();
        function activate() {
            if (!vm.selectedPlan) {
                vm.selectedPlan = {
                    id: 5,
                    category: 'Planner',
                    plan: 'Premium',
                    costUsd: 449,
                    costCad: 449,
                    costEu: 399,
                    monthlyPayments: true,
                    monthlyUsd: 38,
                    monthlyCad: 38,
                    monthlyEu: 34
                };
            }
        }

        function openModal() {
            $uibModal.open({
                templateUrl: 'app/components/modals/terms-and-conditions.html',
                controller: 'ModalController',
                controllerAs: 'vm'
            });
        }

        function signUp() {
            vm.loggedIn = true;
        }

        function continueCheckout() {
            vm.confirmInfo = true;
        }

        function confirmCheckout() {
            console.log('confirming checkout');
        }
    }
})();
