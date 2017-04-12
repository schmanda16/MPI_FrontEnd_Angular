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

        function selectMembership(category, plan) {
            $state.go('sign-up', {selectedPlan: {category: category, plan: plan}});
        }
    }
})();
