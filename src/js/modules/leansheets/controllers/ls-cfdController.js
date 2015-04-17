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
    return ['$log', '$scope', 'ls-cfdService',
        function ($log, $scope, cfdService ) {

            var chartName = 'cfd',
                defaultWorkType,
                key = 0;

            $scope.dropdowns = [];  // array of work type objects

            $scope.addDropdown = function() {
                $log.debug('ls-cfdController: adding dropdown');
                $scope.dropdowns = $scope.addDropdownParent($scope.dropdowns, defaultWorkType, $scope.dropdowns.length);
                key = $scope.dropdowns.length;
            };

            $scope.removeDropdown = function(key) {
                $log.debug('ls-cfdController: removing dropdown');
                $scope.dropdowns = $scope.removeDropdownParent($scope.dropdowns, key);
                key = $scope.dropdowns.length;
            };

            $scope.query = function() {
                $log.debug('ls-cfdController: Calling parent controller to update control chart!');
                $log.debug('ls-cfdController: work types sending to query', $scope.dropdowns);
                updateChart();
            };

            $scope.$on('types:loaded',
                function(event, workType) {
                    $log.debug('ls-cfdController: Caught "types:loaded" event!');
                    defaultWorkType = workType;
                    $scope.addDropdown();
                    updateChart();
                });

            $scope.$on('chart:' + chartName,
                function(event, config) {
                    $log.debug('ls-cfdController: Caught "chart:' + chartName + '" event!');
                    $log.debug('ls-cfdController: config', config);
                    $scope.config = config;
                });

            $scope.changeType = function(workType, key) {
                    $log.debug('ls-cfdController: changeType');
                    $scope.dropdowns[key] = workType;
                };

            var updateChart = function() {
               $log.debug('Calling parent controller to update control chart');
               $scope.updateChart($scope.dropdowns, cfdService, chartName);
            };
        }];
});