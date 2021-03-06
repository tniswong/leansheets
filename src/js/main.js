/**
 * Application-level dependencies go here.
 */
define([
    'jquery',
    'angular',
    'moment',
    'jssha',
    'goog!visualization,1',
    'bootstrap',
    'bootstrap-datepicker',
    'modules/leansheets/ls-leansheetsApplication',
    'highcharts',
    'highchartsng'
], function($, ng, moment, jssha ) {
    'use strict';

    var initInjector = ng.injector(['ng']),
        $http = initInjector.get('$http'),
        $log = initInjector.get('$log'),
        configFile = '/config.json';

    try {
        if (!window.jasmine) {
            fetchConfig().then(bootstrapApplication);
        }
    } catch (e) {
        // don't bootstrap more than once.
        console.log(e);
    }

    function fetchConfig() {
        $log.debug('Fetching Configuration');
        return $http.get(configFile).then(
                function (response) {
                    $log.debug('Loaded configuration file!', response.data);
                    ng.module('config',[]).constant('CONFIG', response.data);
                }, function (error) {
                    $log.error('There was an error loading the configuration file!', error);
                    alert('There was an error loading the configuration file!  Please reload page.');
                });
    }

    function bootstrapApplication() {
        $log.debug('Bootstraping Application');
        ng.module('google',[]).constant('$google', google);
        ng.module('moment',[]).constant('$moment', moment);
        ng.module('jssha',[]).constant('$jssha', jssha);
        ng.bootstrap(document, ['ls-leansheetsApplication']);
    }
});
