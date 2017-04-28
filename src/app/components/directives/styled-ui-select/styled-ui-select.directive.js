(function () {
    'use strict';

    angular
        .module('app')
        .directive('styledUiSelect', styledUiSelect);

    function styledUiSelect() {
        var directive = {
            templateUrl: 'app/components/directives/styled-ui-select/styled-ui-select.html',
            restrict: 'EA',
            controller: 'styledUiSelectController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                value:"=",
                readonly:"&",
                maxLength:"=",
                menuOptions:"=",
                itemDisplayKey:"@",
                changeCallback:"&",
                hasError:"=",
                required:"@",
                searchEnabled:"@",
                placeholderText:"@"
            }
        };
        return directive;
    }


}());
