(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($scope, $http, $mdDialog, $mdMedia, projectService, util) {
        var projectController = this;
        angular.copy(util.defaultPageRequest, projectController.pageRequest = {});
        
        projectController.find = find;
        projectController.onPageChange = onPageChange;
        projectController.detail = detail;
        
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
        	projectController.pageRequest.offset = projectController.pageRequest.pageSize * (newPageNumber - 1);
            projectController.find();   
        };

        
        function detail(event, project) {
        	projectController.entity = project;
        	var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({ 
                controller: DialogController,
                templateUrl: 'app/cruds/project_detail.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: useFullScreen,
                locals: {
                    entity: project
                }
              });
        };
        
        (function init() {             
            projectController.find();            
        })();
        
        function DialogController($scope, $mdDialog, $mdToast, util, projectService, entity ) {
            angular.copy(entity, $scope.entity = {});
            $scope.closeDialog = closeDialog;
            $scope.save = save;
            
            function closeDialog() {
                $mdDialog.hide();
            };
            
            function save(entity) {        
                projectService.save(entity)
            	.success(function(result) {
                	util.showMessage($mdToast, 'Project '+$scope.entity.title+' saved successfully : ');
                	closeDialog();
            	})
            	.error(function (error) {
                	util.showMessage($mdToast, 'An error has occurred. Try again later. ');
            	});        	
            };
        };
        
    }
})();