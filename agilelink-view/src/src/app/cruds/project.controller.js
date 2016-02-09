(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($scope, $http, projectService) {
        var projectController = this;
        projectController.pageRequest = {
            pageNumber : 1,
            pageSize : 6,
            offset : 0
        };
        $scope.$watch('projectController.pageRequest.pageNumber', function(newValue, oldValue) {
        	console.log(newValue);
        });
        
        projectController.find = find;
        projectController.detail = detail;
        projectController.adjustSearchResultForGrid = adjustSearchResultForGrid;
        
        function find() {        
            projectService.find(projectController.pageRequest)
        	.success(function(searchResult) {
        		projectController.adjustSearchResultForGrid(searchResult);
        		projectController.searchResult = searchResult;        		
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
        		console.log(array);
        	});
        };
        
        function detail(project) {
        	alert(project.title);
        }
        
        (function init() {             
            projectController.find();            
        })();
        
    }
})();