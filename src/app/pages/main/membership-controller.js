(function () {
    'use strict';

    angular
        .module('app')
        .controller('MembershipController', MembershipController);

    MembershipController.$inject = [];

    function MembershipController() {
        var vm = this;
        vm.selectedTabIndex = 0;
        vm.supplierTooltip = 'app/components/tooltips/supplier-tooltip.html';
        vm.plannerTooltip = 'app/components/tooltips/planner-tooltip.html';
        vm.facultyTooltip = 'app/components/tooltips/faculty-tooltip.html';
        vm.studentTooltip = 'app/components/tooltips/student-tooltip.html';
    }
})();
