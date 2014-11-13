(function (root) {
	'use strict';
	
	require(['../scripts/config'], function (Config) {
		
		// Load configurations
		require.config(Config);
		
		require(['App', '../scripts/app/controllers/testController'], function () {
			angular.bootstrap(document, ['App']);
		});
	});
}(this));
