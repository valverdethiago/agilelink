(function() {
    'use strict';

    angular
        .module('rodrigo-module')
        .controller('RodrigoController', RodrigoController);
        

    /* @ngInject */
    function RodrigoController($scope, $http, $mdDialog, $mdMedia, rodrigoService, filterFilter) {
        var rodrigoController = this;
        
        rodrigoController.search = {};
        rodrigoController.list = list;
        rodrigoController.filtroZeroKm = filtroZeroKm;
        rodrigoController.filtroUsados = filtroUsados;
        rodrigoController.limpaFiltros = limpaFiltros;
        rodrigoController.count = count;
        
        function list() {        
        	rodrigoService.list()
        	.success(function(result) {
        		console.log(result);
        		rodrigoController.result = result.records;
        	})
        	.error(function (error) {
        		console.log(error);
        	});        	
        };   
        function filtroZeroKm() {
        	rodrigoController.search.Categoria = 'novo';
        	console.log(rodrigoController.search);
        };

        function filtroUsados() {
        	rodrigoController.search.Categoria = 'usado';
        	console.log(rodrigoController.search);
        };
        
        function limpaFiltros() {
        	rodrigoController.search = {};
        };
        
        function count(){
            return filterFilter( rodrigoController.result, rodrigoController.search).length;
        }
        
        (function init() {             
            rodrigoController.list();            
        })();
        
    }
})();