(function() {
    'use strict';

    angular
        .module('rodrigo-module')
        .config(rootModuleConfig);

    /* @ngInject */
    function rootModuleConfig($translatePartialLoaderProvider, $stateProvider) {
        $stateProvider
        .state('rodrigo', {
            parent : 'triangular.admin-default',
            data: {
                layout: {
                    sideMenuSize: 'icon'
                }
            },
            url: '/rodrigo',
            templateUrl: 'app/rodrigo/teste.html',
            controller: 'RodrigoController',
            controllerAs: 'rodrigoController'
        });
    }
})();