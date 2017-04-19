(function () {
    'use strict';

    angular
        .module('app')
        .directive('styledDropdown', styledDropdown);

    function styledDropdown() {
        var directive = {
            templateUrl: 'app/components/directives/styled-dropdown/styled-dropdown.html',
            restrict: 'EA',
            controller: 'StyledDropdownController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                value: '=',
                menuOptions: '=',
                itemDisplayKey: '@',
                changeCallback: '&'
            }
        };
        return directive;
    }
}());
