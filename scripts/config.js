(function (define) {
	'use strict';
	
	define(function () {
		var Config = {
			baseUrl: 'vendor',
			paths: {
				jQuery: 'jquery/dist/jquery',
				Angular: 'angular/angular.min',
				
				App: '../scripts/app/app'
			},
			
			shim: {
				Angular: {
					deps: ['jQuery'],
					exports: 'angular'
				},
				
				App: ['Angular']
			}
		};
		
		return Config;
	});
	
}(define));