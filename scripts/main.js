(function (root) {
	'use strict';
	
	require(['../scripts/config'], function (Config) {
		
		// Load configurations
		require.config(Config);
		
		require(['../scripts/app/controllers/testController', 'App'], function () {
			angular.bootstrap(document, ['App']);
		});
	});
}(this));