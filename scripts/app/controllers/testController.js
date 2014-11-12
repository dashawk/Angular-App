(function (define) {
	'use strict';

	define(['App'], function (App) {
		var Controller = App.controller('testController', function ($scope) {
			$scope.message = 'test';
		});

		return Controller;
	});

}(define));