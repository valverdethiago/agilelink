(function() {
    'use strict';

    angular
        .module('crud-module')
        .factory('projectService', ProjectService);
        

    /* @ngInject */
    function ProjectService($http) {
        /* your code here */
  		/* when you want to make Ajax calls, use $http */
 		$http.get('/rest/project/list')
     		.success(function (response) {
     			console.log(response);
     		})
     		.error(function(err){
     			console.log(err);
     		});
  		/* keep going */
    }
})();