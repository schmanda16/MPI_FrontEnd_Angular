(function () {
    'use strict';

    angular
        .module('app')
        .controller('MembershipController', MembershipController);

    MembershipController.$inject = ['$state'];

    function MembershipController($state) {
        var vm = this;
        vm.selectedTabIndex = 0;
        vm.supplierTooltip = 'app/components/tooltips/supplier-tooltip.html';
        vm.plannerTooltip = 'app/components/tooltips/planner-tooltip.html';
        vm.facultyTooltip = 'app/components/tooltips/faculty-tooltip.html';
        vm.studentTooltip = 'app/components/tooltips/student-tooltip.html';
        vm.selectMembership = selectMembership;

        vm.membershipOptions = [
            {
                id: 0,
                category: 'Supplier',
                plan: 'Basic',
                costUsd: 399,
                costCad: 399,
                costEu: 369,
                monthlyPayments: true,
                monthlyUsd: 35,
                monthlyCad: 35,
                monthlyEu: 31
            },
            {
                id: 1,
                category: 'Supplier',
                plan: 'Advanced',
                costUsd: 475,
                costCad: 475,
                costEu: 450,
                monthlyPayments: true,
                monthlyUsd: 40,
                monthlyCad: 40,
                monthlyEu: 35
            },
            {
                id: 2,
                category: 'Supplier',
                plan: 'Premium',
                costUsd: 569,
                costCad: 569,
                costEu: 519,
                monthlyPayments: true,
                monthlyUsd: 50,
                monthlyCad: 50,
                monthlyEu: 45
            },
            {
                id: 3,
                category: 'Planner',
                plan: 'Basic',
                costUsd: 279,
                costCad: 279,
                costEu: 259,
                monthlyPayments: true,
                monthlyUsd: 24,
                monthlyCad: 24,
                monthlyEu: 22
            },
            {
                id: 4,
                category: 'Planner',
                plan: 'Advanced',
                costUsd: 355,
                costCad: 355,
                costEu: 325,
                monthlyPayments: true,
                monthlyUsd: 30,
                monthlyCad: 30,
                monthlyEu: 28
            },
            {
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
            },
            {
                id: 6,
                category: 'Faculty',
                plan: 'Faculty',
                costUsd: 199,
                costCad: 199,
                costEu: 199,
                monthlyPayments: false
            },
            {
                id: 7,
                category: 'Student',
                plan: 'Student',
                costUsd: 40,
                costCad: 40,
                costEu: 40,
                monthlyPayments: false
            }
        ];

        function selectMembership(planId) {
            var plan = _.find(vm.membershipOptions, function (option) {
                return option.id === planId;
            });
            // console.log(plan);
            $state.go('sign-up', {selectedPlan: plan});
        }
    }
})();
