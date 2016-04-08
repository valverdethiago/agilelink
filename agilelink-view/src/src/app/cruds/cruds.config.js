(function() {
    'use strict';

    var module = angular
        .module('crud-module')
        .config(rootModuleConfig);
    
    var util = {
    	defaultPageRequest : {
           	itensPerLine : 3,
            pageNumber : 1,
            pageSize : 6,
            offset : 0
    	},
    	isUndefinedOrNull : isUndefinedOrNull, 
    	isNotNull : isNotNull,
    	adjustSearchResultForGrid : adjustSearchResultForGrid,
    	showMessage : showMessage
    	
    };
    
    module.constant('util', util);
    

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
    };
    
    function adjustSearchResultForGrid(searchResult, pageRequest) {	
		searchResult.limit = (searchResult.number + 1) * searchResult.numberOfElements;        		
    	if( searchResult.content.length < pageRequest.itensPerLine ) {
    		searchResult.columns = new Array(searchResult.content.length);        		
    	}
    	if( searchResult.content.length >= pageRequest.itensPerLine ) {
    		searchResult.columns = new Array(pageRequest.itensPerLine);
    	}
    	searchResult.content.forEach(function (value, i) {
    		var i_x = i % pageRequest.itensPerLine;
    		var array = searchResult.columns[i_x];
    		if(typeof array == 'undefined') {
    			array = new Array();
    			searchResult.columns[i_x] = array;
    		}
    		array.push(value);
    	});
    };
    
    function isNotNull(val) {
	    return !(val === null); 
	}
    
    function isUndefinedOrNull(val) {
	    return angular.isUndefined(val) || val === null; 
	}
    
    function showMessage($mdToast, message) {
    	$mdToast.show(
    		$mdToast.simple()
    	    	.textContent(message)
    	        .position('top right')
    	        .hideDelay(4000)
    	);            	  
    }
    
    
    
})();