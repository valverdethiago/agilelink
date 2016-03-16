(function() {
    'use strict';

    angular
        .module('rodrigo-module')
        .factory('rodrigoService', RodrigoService);
        

    /* @ngInject */
    function RodrigoService($http) {
    	var urlBase = '/rest/veiculo' 
        var service = {
            list: list
        };
        return service;

        function list () {
            return $http.get(urlBase + '/list');
        };
    }
})();