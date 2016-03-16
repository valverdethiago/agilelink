(function() {
    'use strict';

    angular
        .module('crud-module')
        .config(rootModuleConfig);
    

    /* @ngInject */
    function rootModuleConfig($translatePartialLoaderProvider, $stateProvider, paginationTemplateProvider) {
        $translatePartialLoaderProvider.addPart('app/cruds');

        $stateProvider
        .state('projects', {
            parent : 'triangular.admin-default',
            data: {
                layout: {
                    sideMenuSize: 'icon'
                }
            },
            url: '/projects',
            templateUrl: 'app/cruds/projects.html',
            controller: 'ProjectController',
            controllerAs: 'projectController'
        });
        paginationTemplateProvider.setPath('app/util/new-pagination.tpl.html');
    }
})();