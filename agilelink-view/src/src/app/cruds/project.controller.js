(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($scope, $mdDialog, $mdMedia, $mdToast, projectService, util) {
        var projectController = this;
        angular.copy(util.defaultPageRequest, projectController.pageRequest = {});
        
        projectController.find = find;
        projectController.onPageChange = onPageChange;
        projectController.detail = detail;
        projectController.createNew = createNew;
        projectController.open = open;
        projectController.save = save;
        projectController.closeDialog = closeDialog;
        projectController.openDialog = openDialog;
        
        function find() {        
            projectService.find(projectController.pageRequest)
        	.success(function(searchResult) {
        		util.adjustSearchResultForGrid(searchResult, projectController.pageRequest);
        		projectController.searchResult = searchResult;  
        	})
        	.error(function (error) {
        		console.log(error);
        	});        	
        };
        
        function onPageChange(newPageNumber) {
        	var pageRequest = projectController.pageRequest;
        	pageRequest.pageNumber = newPageNumber;
        	projectController.pageRequest.offset = pageRequest.pageSize * (newPageNumber - 1);
            projectController.find();   
        };
        
        function detail(event, entity) {
            angular.copy(entity, projectController.entity = {});
            openDialog(event, 'Edit Project');
        };
        
        function createNew(event) {
            projectController.entity = {};
            openDialog(event, 'New Project');
        }
        
        function open(event, entity) {
        	util.showMessage($mdToast, 'Not yet implemented.');
        }
        
        function save(entity) {        
            projectService.save(entity)
        	.success(function(result) {
            	util.showMessage($mdToast, 'Project '+entity.title+' saved successfully.');
            	closeDialog();
                find();   
        	})
        	.error(function (error) {
            	util.showMessage($mdToast, 'An error has occurred. Try again later. ');
        	});        	
        };
        
        function openDialog(event, title) {
            $mdDialog.show({ 
                controller: DialogController,
                templateUrl: 'app/cruds/project_detail.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen,
                locals: {
                	projectController : projectController,
                	title : title
                }
              });        	
        }
        
        function closeDialog() {
            $mdDialog.hide();
        };
        
        (function init() {             
            projectController.find();            
        })();
        
        function DialogController($scope, projectController, title ) {
            $scope.controller = projectController;            
            $scope.title = title;
        };
        
    }
})();