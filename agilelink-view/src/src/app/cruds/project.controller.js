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
            projectService.find(projectController.pageRequest)
            	.success(function(searchResult) {
            		console.log(searchResult);
            		projectController.searchResult = searchResult;
            	})
            	.error(function (error) {
            		console.log(error);
            	})
            
        })();
        
    }
})();