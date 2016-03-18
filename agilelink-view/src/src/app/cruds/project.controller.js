(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($scope, $http, $mdDialog, $mdMedia, projectService, defaultPageRequest, adjustSearchResultForGrid) {
        var projectController = this;
        projectController.pageRequest = {}
        angular.copy(defaultPageRequest, projectController.pageRequest);
        
        projectController.find = find;
        projectController.onPageChange = onPageChange;
        
        function find() {        
            projectService.find(projectController.pageRequest)
        	.success(function(searchResult) {
        		adjustSearchResultForGrid(searchResult, projectController.pageRequest);
        		projectController.searchResult = searchResult;  
        	})
        	.error(function (error) {
        		console.log(error);
        	});        	
        };
        
        function onPageChange(newPageNumber) {
        	var pageRequest = projectController.pageRequest;
        	pageRequest.pageNumber = newPageNumber;
        	projectController.pageRequest.offset = projectController.pageRequest.pageSize * (newPageNumber - 1);
            projectController.find();   
        }
        
        (function init() {             
            projectController.find();            
        })();
        
    }
})();