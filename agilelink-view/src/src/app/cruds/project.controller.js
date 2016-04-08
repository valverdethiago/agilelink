(function() {
    'use strict';

    angular
        .module('crud-module')
        .controller('ProjectController', ProjectController);
        

    /* @ngInject */
    function ProjectController($scope, $mdDialog, $mdMedia, $mdToast, $translate, projectService, util) {
        var projectController = this;
        angular.copy(util.defaultPageRequest, projectController.pageRequest = {});
        projectController.pageRequest.onlyActives = true;
        
        projectController.find = find;
        projectController.onPageChange = onPageChange;
        projectController.detail = detail;
        projectController.createNew = createNew;
        projectController.open = open;
        projectController.save = save;
        projectController.closeDialog = closeDialog;
        projectController.openDialog = openDialog;
        projectController.archive = archive;
        projectController.confirmArchivation = confirmArchivation;
        
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
        	console.log(entity);
            angular.copy(entity, projectController.entity = {});
            openDialog(event);
        };
        
        function createNew(event) {
            projectController.entity = {};
            openDialog(event);
        }
        
        function open(event, entity) {
        	util.showMessage($mdToast, $translate.instant('CRUDS.PROJECTS.MESSAGES.NOT_IMPLEMENTED'));
        }
        
        function save(entity) {        
            projectService.save(entity)
        	.success(function(result) {
            	util.showMessage($mdToast, $translate.instant('CRUDS.PROJECTS.MESSAGES.SUCCESS.SAVE'));
            	closeDialog();
                find();   
        	})
        	.error(function (error) {
            	util.showMessage($mdToast, $translate.instant('CRUDS.PROJECTS.MESSAGES.ERROR'));
        	});        	
        };
        
        function confirmArchivation(event, entity) {
            var confirm = $mdDialog.confirm()
                  .title($translate.instant('CRUDS.PROJECTS.MESSAGES.CONFIRMATION.ARCHIVE'))
                  .textContent($translate.instant('CRUDS.PROJECTS.MESSAGES.CONFIRMATION.ARCHIVE_EXP'))
                  .ariaLabel($translate.instant('CRUDS.PROJECTS.DIALOG.TITLE.CONFIRMATION'))
                  .targetEvent(event)
                  .ok($translate.instant('CRUDS.PROJECTS.LABELS.BUTTONS.OK'))
                  .cancel($translate.instant('CRUDS.PROJECTS.LABELS.BUTTONS.CANCEL'));
            $mdDialog.show(confirm).then(function() {
            	projectController.archive(entity);
            }, function() {
            	detail(event, entity);
            });
        }
        
        function archive(entity) {        
            projectService.archive(entity)
        	.success(function(result) {
            	util.showMessage($mdToast, $translate.instant('CRUDS.PROJECTS.MESSAGES.SUCCESS.ARCHIVE'));
                projectController.find();   
        	})
        	.error(function (error) {
            	util.showMessage($mdToast, $translate.instant('CRUDS.PROJECTS.MESSAGES.ERROR') );
        	});        	
        };
        
        function openDialog(event) {
            $mdDialog.show({ 
                controller: DialogController,
                templateUrl: 'app/cruds/project_detail.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen,
                locals: {
                	projectController : projectController,
                	util : util
                }
              });        	
        }
        
        function closeDialog() {
            $mdDialog.hide();
        };
        
        (function init() {             
            projectController.find();            
        })();
        
        function DialogController($scope, projectController, util) {
            $scope.controller = projectController;  
            $scope.util = util;
            
        };
        
    }
})();