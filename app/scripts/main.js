(function() {
	'use strict';

	require.config({
		paths: {
			angular: '../../bower_components/angular/angular',
			'ui.router': '../../bower_components/angular-ui-router/release/angular-ui-router',
			'angular-animate': '../../bower_components/angular-animate/angular-animate',
			'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
			'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
			'angular-resource': '../../bower_components/angular-resource/angular-resource',
			'angular-route': '../../bower_components/angular-route/angular-route',
			'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
			'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
			'angular-touch': '../../bower_components/angular-touch/angular-touch',
			'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
			bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
		},
		shim: {
			angular: {
				exports: 'angular'
			},
			'ui.router': ['angular']
		}
	});

	


})();
///*jshint unused: vars */
//require.config({
//  paths: {
//    angular: '../../bower_components/angular/angular',
//		'ui.router': '../../bower_components/angular-ui-router/release/angular-ui-router'
////    'angular-route': '../../bower_components/angular-route/angular-route',
////    'angular-animate': '../../bower_components/angular-animate/angular-animate',
////    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
////    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
////    'angular-resource': '../../bower_components/angular-resource/angular-resource',
////    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
////    'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
////    'angular-touch': '../../bower_components/angular-touch/angular-touch',
////    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
////    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
//  },
//  shim: {
//    angular: {
//      exports: 'angular'
//    }
//  },
//  priority: [
//    'angular'
//  ],
//  packages: [
//
//  ]
//});
//
////http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
//window.name = 'NG_DEFER_BOOTSTRAP!';
//
//require([
//  'angular',
//  'app',
//  'ui.router',
//], function(angular, app) {
//  'use strict';
//  /* jshint ignore:start */
//  var $html = angular.element(document.getElementsByTagName('html')[0]);
//  /* jshint ignore:end */
//  angular.element().ready(function() {
//    angular.resumeBootstrap([app.name]);
//  });
//});
