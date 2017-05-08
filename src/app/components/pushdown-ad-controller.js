(function () {
    'use strict';

    angular
        .module('app')
        .controller('PushdownAdController', PushdownAdController);

    PushdownAdController.$inject = [];

    function PushdownAdController() {
        var vm = this;

        var targetLargeImg = document.getElementById('large-pushdown-image');
        $(targetLargeImg).hide();
        $(targetLargeImg).slideDown(1000).delay(3000);
        $(targetLargeImg).slideUp(1000).delay(2000);

        var targetSmallImg = document.getElementById('small-pushdown-image');
        $(targetSmallImg).delay(400).fadeOut(600);
        $(targetSmallImg).delay(3200).fadeIn(800);
    }
})();
