(function() {
    'use strict';

    angular
        .module('crud-module')
        .factory('projectService', ProjectService);
        

    /* @ngInject */
    function ProjectService($http) {
    	var urlBase = '/rest/project' ;
        var service = {
        	archive: archive,
            save: save,
            load: load,
            remove: remove,
            find: find,
            list: list
        };
        return service;
        
        function save(project) {
        	return $http.post(urlBase+'/save', project);
        };
        
        function archive(project) {
        	return $http.post(urlBase+'/archive', project);
        };

        function load (id) {
        	return $http.put(urlBase+'/load/' + id);
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