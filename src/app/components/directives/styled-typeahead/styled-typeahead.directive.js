(function () {
    'use strict';

    angular
        .module('app')
        .directive('styledTypeahead', styledTypeahead);

    function styledTypeahead() {
        var directive = {
            templateUrl: 'app/components/directives/styled-typeahead/styled-typeahead.html',
            restrict: 'EA',
            controller: 'StyledTypeaheadController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                value: '=',
                menuOptions: '=',
                itemDisplayKey: '@',
                changeCallback: '&',
                hasError: "=",
                required: '@',
                enterValue: '@'
            }
        };
        return directive;
    }
}());
