/**
 * The controllers/ directory should only include view-level angular controller definitions.
 * This DOES NOT INCLUDE controllers for use in directives. Keep those inside the directive definition.
 *
 * Naming Convention:
 *
 * 1. Always include `ls-` prefix for namespacing
 * 2. instanceStyleCamelCasing
 * 3. Always include `Controller` suffix
 *
 * i.e. ls-applicationController.js
 */
define(['angular'], function (ng) {
    'use strict';

    /**
     * Returns angular "array-syntax" controller definition.
     *
     * Parameter options include all standard angular services, plus any provided by
     * module-level dependencies.
     */
    return ['$log', '$scope', 'ls-histogramService',
        function ($log, $scope, histogramService ) {

            var chartName = 'histogram';

            $scope.$on('types:loaded',
                function(event, workType) {
                    $log.debug('Caught "types:loaded" event in ls-histogramController!');
                    $log.debug('Calling parent controller to update histogram');
                    $scope.updateChart(workType, histogramService, chartName);
                });

            $scope.$on('chart:' + chartName,
                function(event, config) {
                    $log.debug('Caught "chart:' + chartName + '" event in ls-histogramController');
                    $scope.config = config;
                });

            $scope.changeType = function(workType) {
                    $log.debug('changeType: ls-histogramController');
                    $log.debug('Calling parent controller to update histogram!');
                    $scope.updateChart(workType, histogramService, chartName);
                };

        }];
});