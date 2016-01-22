(function() {
    'use strict';

    angular
        .module('crud-module')
        .factory('projectService', ProjectService);
        

    /* @ngInject */
    function ProjectService($http) {
    	var urlBase = '/rest/project' 
        var someValue = '';
        var service = {
            save: save,
            load: load,
            remove: remove,
            find: find,
            list: list
        };
        return service;
        
        function save(project) {
        	$http.put(urlBase+'/save', project);
        };

        function load (id) {
        	$http.put(urlBase+'/load/' + id);
        };

        function remove (id) {
            return $http.delete(urlBase + '/delete/' + id);
        };

        function list () {
            return $http.get(urlBase + '/list');
        };

        function find (searchObject) {
            return $http.post(urlBase + '/find', searchObject);
        };
    }
})();