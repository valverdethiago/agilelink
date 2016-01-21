(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($http, projectService) {
        var projectController = this;
        projectController.pageRequest = {
            pageNumber : 0,
            pageSize : 3,
            offset : 0
        };
        
        (function init() {
            projectController.searchResult = projectService.list(projectController.pageRequest);
        })();
        
    }
})();