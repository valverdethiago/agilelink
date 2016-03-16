(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($scope, $http, $mdDialog, $mdMedia, projectService) {
        var projectController = this;
        projectController.pageRequest = {
            pageNumber : 1,
            pageSize : 6,
            offset : 0
        };
        
        projectController.find = find;
        projectController.onPageChange = onPageChange;
        projectController.adjustSearchResultForGrid = adjustSearchResultForGrid;
        
        function find() {        
            projectService.find(projectController.pageRequest)
        	.success(function(searchResult) {
        		projectController.adjustSearchResultForGrid(searchResult);
        		projectController.searchResult = searchResult;  
        		$scope.searchResult = searchResult;
        		console.log(searchResult);
        	})
        	.error(function (error) {
        		console.log(error);
        	});        	
        };
        
        function adjustSearchResultForGrid(searchResult) { 		
    		searchResult.limit = (searchResult.number + 1) * searchResult.numberOfElements;        		
        	if( searchResult.content.length < 3 ) {
        		searchResult.columns = new Array(searchResult.content.length);        		
        	}
        	if( searchResult.content.length >= 3 ) {
        		searchResult.columns = new Array(3);
        	}
        	searchResult.content.forEach(function (value, i) {
        		var i_x = i % 3;
        		var array = searchResult.columns[i_x];
        		if(typeof array == 'undefined') {
        			array = new Array();
        			searchResult.columns[i_x] = array;
        		}
        		array.push(value);
        	});
        };
        
        function onPageChange(newPageNumber) {
        	var pageRequest = projectController.pageRequest;
        	console.log(newPageNumber);
        	pageRequest.pageNumber = newPageNumber;
        	projectController.pageRequest.offset = projectController.pageRequest.pageSize * (newPageNumber - 1);
            projectController.find();   
        }
        
        (function init() {             
            projectController.find();            
        })();
        
    }
})();