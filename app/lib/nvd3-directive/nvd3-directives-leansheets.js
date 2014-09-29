
( function () {
  'use strict';

  function configureXaxis( chart, scope, attrs ) {
    if ( attrs.xaxisorient ) {
      chart.xAxis.orient( attrs.xaxisorient );
    }
    if ( attrs.xaxisticks ) {
      chart.xAxis.scale().ticks( attrs.xaxisticks );
    }
    if ( attrs.xaxistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.xaxistickvalues ) ) ) {
        chart.xAxis.tickValues( scope.$eval( attrs.xaxistickvalues ) );
      } else if ( typeof scope.xaxistickvalues() === 'function' ) {
        chart.xAxis.tickValues( scope.xaxistickvalues() );
      }
    }
    if ( attrs.xaxisticksubdivide ) {
      chart.xAxis.tickSubdivide( scope.xaxisticksubdivide() );
    }
    if ( attrs.xaxisticksize ) {
      chart.xAxis.tickSize( scope.xaxisticksize() );
    }
    if ( attrs.xaxistickpadding ) {
      chart.xAxis.tickPadding( scope.xaxistickpadding() );
    }
    if ( attrs.xaxistickformat ) {
      chart.xAxis.tickFormat( scope.xaxistickformat() );
    }
    if ( attrs.xaxislabel ) {
      chart.xAxis.axisLabel( attrs.xaxislabel );
    }
    if ( attrs.xaxisscale ) {
      chart.xAxis.scale( scope.xaxisscale() );
    }
    if ( attrs.xaxisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.xaxisdomain ) ) ) {
        chart.xDomain( scope.$eval( attrs.xaxisdomain ) );
      } else if ( typeof scope.xaxisdomain() === 'function' ) {
        chart.xDomain( scope.xaxisdomain() );
      }
    }
    if ( attrs.xaxisrange ) {
      if ( Array.isArray( scope.$eval( attrs.xaxisrange ) ) ) {
        chart.xRange( scope.$eval( attrs.xaxisrange ) );
      } else if ( typeof scope.xaxisrange() === 'function' ) {
        chart.xRange( scope.xaxisrange() );
      }
    }
    if ( attrs.xaxisrangeband ) {
      chart.xAxis.rangeBand( scope.xaxisrangeband() );
    }
    if ( attrs.xaxisrangebands ) {
      chart.xAxis.rangeBands( scope.xaxisrangebands() );
    }
    if ( attrs.xaxisshowmaxmin ) {
      chart.xAxis.showMaxMin( ( attrs.xaxisshowmaxmin === 'true' ) );
    }
    if ( attrs.xaxishighlightzero ) {
      chart.xAxis.highlightZero( ( attrs.xaxishighlightzero === 'true' ) );
    }
    if ( attrs.xaxisrotatelabels ) {
      chart.xAxis.rotateLabels( ( +attrs.xaxisrotatelabels ) );
    }
    //    if(attrs.xaxisrotateylabel){
    //        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
    //    }
    if ( attrs.xaxisstaggerlabels ) {
      chart.xAxis.staggerLabels( ( attrs.xaxisstaggerlabels === 'true' ) );
    }
    if ( attrs.xaxislabeldistance ) {
      chart.xAxis.axisLabelDistance( ( +attrs.xaxislabeldistance ) );
    }
  }

  function configureX2axis( chart, scope, attrs ) {
    if ( attrs.x2axisorient ) {
      chart.x2Axis.orient( attrs.x2axisorient );
    }
    if ( attrs.x2axisticks ) {
      chart.x2Axis.scale().ticks( attrs.x2axisticks );
    }
    if ( attrs.x2axistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.x2axistickvalues ) ) ) {
        chart.x2Axis.tickValues( scope.$eval( attrs.x2axistickvalues ) );
      } else if ( typeof scope.xaxistickvalues() === 'function' ) {
        chart.x2Axis.tickValues( scope.x2axistickvalues() );
      }
    }
    if ( attrs.x2axisticksubdivide ) {
      chart.x2Axis.tickSubdivide( scope.x2axisticksubdivide() );
    }
    if ( attrs.x2axisticksize ) {
      chart.x2Axis.tickSize( scope.x2axisticksize() );
    }
    if ( attrs.x2axistickpadding ) {
      chart.x2Axis.tickPadding( scope.x2axistickpadding() );
    }
    if ( attrs.x2axistickformat ) {
      chart.x2Axis.tickFormat( scope.x2axistickformat() );
    }
    if ( attrs.x2axislabel ) {
      chart.x2Axis.axisLabel( attrs.x2axislabel );
    }
    if ( attrs.x2axisscale ) {
      chart.x2Axis.scale( scope.x2axisscale() );
    }
    if ( attrs.x2axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.x2axisdomain ) ) ) {
        chart.x2Axis.domain( scope.$eval( attrs.x2axisdomain ) );
      } else if ( typeof scope.x2axisdomain() === 'function' ) {
        chart.x2Axis.domain( scope.x2axisdomain() );
      }
    }
    if ( attrs.x2axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.x2axisrange ) ) ) {
        chart.x2Axis.range( scope.$eval( attrs.x2axisrange ) );
      } else if ( typeof scope.x2axisrange() === 'function' ) {
        chart.x2Axis.range( scope.x2axisrange() );
      }
    }
    if ( attrs.x2axisrangeband ) {
      chart.x2Axis.rangeBand( scope.x2axisrangeband() );
    }
    if ( attrs.x2axisrangebands ) {
      chart.x2Axis.rangeBands( scope.x2axisrangebands() );
    }
    if ( attrs.x2axisshowmaxmin ) {
      chart.x2Axis.showMaxMin( ( attrs.x2axisshowmaxmin === 'true' ) );
    }
    if ( attrs.x2axishighlightzero ) {
      chart.x2Axis.highlightZero( ( attrs.x2axishighlightzero === 'true' ) );
    }
    if ( attrs.x2axisrotatelables ) {
      chart.x2Axis.rotateLabels( ( +attrs.x2axisrotatelables ) );
    }
    //    if(attrs.xaxisrotateylabel){
    //        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
    //    }
    if ( attrs.x2axisstaggerlabels ) {
      chart.x2Axis.staggerLabels( ( attrs.x2axisstaggerlabels === 'true' ) );
    }
    if ( attrs.x2axislabeldistance ) {
      chart.x2Axis.axisLabelDistance( ( +attrs.x2axislabeldistance ) );
    }
  }

  function configureYaxis( chart, scope, attrs ) {
    if ( attrs.yaxisorient ) {
      chart.yAxis.orient( attrs.yaxisorient );
    }
    if ( attrs.yaxisticks ) {
      chart.yAxis.scale().ticks( attrs.yaxisticks );
    }
    if ( attrs.yaxistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.yaxistickvalues ) ) ) {
        chart.yAxis.tickValues( scope.$eval( attrs.yaxistickvalues ) );
      } else if ( typeof scope.yaxistickvalues() === 'function' ) {
        chart.yAxis.tickValues( scope.yaxistickvalues() );
      }
    }
    if ( attrs.yaxisticksubdivide ) {
      chart.yAxis.tickSubdivide( scope.yaxisticksubdivide() );
    }
    if ( attrs.yaxisticksize ) {
      chart.yAxis.tickSize( scope.yaxisticksize() );
    }
    if ( attrs.yaxistickpadding ) {
      chart.yAxis.tickPadding( scope.yaxistickpadding() );
    }
    if ( attrs.yaxistickformat ) {
      chart.yAxis.tickFormat( scope.yaxistickformat() );
    }
    if ( attrs.yaxislabel ) {
      chart.yAxis.axisLabel( attrs.yaxislabel );
    }
    if ( attrs.yaxisscale ) {
      chart.yAxis.scale( scope.yaxisscale() );
    }
    if ( attrs.yaxisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.yaxisdomain ) ) ) {
        chart.yDomain( scope.$eval( attrs.yaxisdomain ) );
      } else if ( typeof scope.yaxisdomain() === 'function' ) {
        chart.yDomain( scope.yaxisdomain() );
      }
    }
    if ( attrs.yaxisrange ) {
      if ( Array.isArray( scope.$eval( attrs.yaxisrange ) ) ) {
        chart.yRange( scope.$eval( attrs.yaxisrange ) );
      } else if ( typeof scope.yaxisrange() === 'function' ) {
        chart.yRange( scope.yaxisrange() );
      }
    }
    if ( attrs.yaxisrangeband ) {
      chart.yAxis.rangeBand( scope.yaxisrangeband() );
    }
    if ( attrs.yaxisrangebands ) {
      chart.yAxis.rangeBands( scope.yaxisrangebands() );
    }
    if ( attrs.yaxisshowmaxmin ) {
      chart.yAxis.showMaxMin( ( attrs.yaxisshowmaxmin === 'true' ) );
    }
    if ( attrs.yaxishighlightzero ) {
      chart.yAxis.highlightZero( ( attrs.yaxishighlightzero === 'true' ) );
    }
    if ( attrs.yaxisrotatelabels ) {
      chart.yAxis.rotateLabels( ( +attrs.yaxisrotatelabels ) );
    }
    if ( attrs.yaxisrotateylabel ) {
      chart.yAxis.rotateYLabel( ( attrs.yaxisrotateylabel === 'true' ) );
    }
    if ( attrs.yaxisstaggerlabels ) {
      chart.yAxis.staggerLabels( ( attrs.yaxisstaggerlabels === 'true' ) );
    }
    if ( attrs.yaxislabeldistance ) {
      chart.yAxis.axisLabelDistance( ( +attrs.yaxislabeldistance ) );
    }
  }

  function configureY1axis( chart, scope, attrs ) {
    if ( attrs.y1axisticks ) {
      chart.y1Axis.scale().ticks( attrs.y1axisticks );
    }
    if ( attrs.y1axistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.y1axistickvalues ) ) ) {
        chart.y1Axis.tickValues( scope.$eval( attrs.y1axistickvalues ) );
      } else if ( typeof scope.y1axistickvalues() === 'function' ) {
        chart.y1Axis.tickValues( scope.y1axistickvalues() );
      }
    }
    if ( attrs.y1axisticksubdivide ) {
      chart.y1Axis.tickSubdivide( scope.y1axisticksubdivide() );
    }
    if ( attrs.y1axisticksize ) {
      chart.y1Axis.tickSize( scope.y1axisticksize() );
    }
    if ( attrs.y1axistickpadding ) {
      chart.y1Axis.tickPadding( scope.y1axistickpadding() );
    }
    if ( attrs.y1axistickformat ) {
      chart.y1Axis.tickFormat( scope.y1axistickformat() );
    }
    if ( attrs.y1axislabel ) {
      chart.y1Axis.axisLabel( attrs.y1axislabel );
    }
    if ( attrs.y1axisscale ) {
      chart.y1Axis.yScale( scope.y1axisscale() );
    }
    if ( attrs.y1axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.y1axisdomain ) ) ) {
        chart.y1Axis.domain( scope.$eval( attrs.y1axisdomain ) );
      } else if ( typeof scope.y1axisdomain() === 'function' ) {
        chart.y1Axis.domain( scope.y1axisdomain() );
      }
    }
    if ( attrs.y1axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.y1axisrange ) ) ) {
        chart.y1Axis.range( scope.$eval( attrs.y1axisrange ) );
      } else if ( typeof scope.y1axisrange() === 'function' ) {
        chart.y1Axis.range( scope.y1axisrange() );
      }
    }
    if ( attrs.y1axisrangeband ) {
      chart.y1Axis.rangeBand( scope.y1axisrangeband() );
    }
    if ( attrs.y1axisrangebands ) {
      chart.y1Axis.rangeBands( scope.y1axisrangebands() );
    }
    if ( attrs.y1axisshowmaxmin ) {
      chart.y1Axis.showMaxMin( ( attrs.y1axisshowmaxmin === 'true' ) );
    }
    if ( attrs.y1axishighlightzero ) {
      chart.y1Axis.highlightZero( ( attrs.y1axishighlightzero === 'true' ) );
    }
    if ( attrs.y1axisrotatelabels ) {
      chart.y1Axis.rotateLabels( ( +scope.y1axisrotatelabels ) );
    }
    if ( attrs.y1axisrotateylabel ) {
      chart.y1Axis.rotateYLabel( ( attrs.y1axisrotateylabel === 'true' ) );
    }
    if ( attrs.y1axisstaggerlabels ) {
      chart.y1Axis.staggerlabels( ( attrs.y1axisstaggerlabels === 'true' ) );
    }
    if ( attrs.y1axislabeldistance ) {
      chart.y1Axis.axisLabelDistance( ( +attrs.y1axislabeldistance ) );
    }
  }

  function configureY2axis( chart, scope, attrs ) {
    if ( attrs.y2axisticks ) {
      chart.y2Axis.scale().ticks( attrs.y2axisticks );
    }
    if ( attrs.y2axistickvalues ) {
      chart.y2Axis.tickValues( scope.$eval( attrs.y2axistickvalues ) );
    }
    if ( attrs.y2axisticksubdivide ) {
      chart.y2Axis.tickSubdivide( scope.y2axisticksubdivide() );
    }
    if ( attrs.y2axisticksize ) {
      chart.y2Axis.tickSize( scope.y2axisticksize() );
    }
    if ( attrs.y2axistickpadding ) {
      chart.y2Axis.tickPadding( scope.y2axistickpadding() );
    }
    if ( attrs.y2axistickformat ) {
      chart.y2Axis.tickFormat( scope.y2axistickformat() );
    }
    if ( attrs.y2axislabel ) {
      chart.y2Axis.axisLabel( attrs.y2axislabel );
    }
    if ( attrs.y2axisscale ) {
      chart.y2Axis.yScale( scope.y2axisscale() );
    }
    if ( attrs.y2axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.y2axisdomain ) ) ) {
        chart.y2Axis.domain( scope.$eval( attrs.y2axisdomain ) );
      } else if ( typeof scope.y2axisdomain() === 'function' ) {
        chart.y2Axis.domain( scope.y2axisdomain() );
      }
    }
    if ( attrs.y2axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.y2axisrange ) ) ) {
        chart.y2Axis.range( scope.$eval( attrs.y2axisrange ) );
      } else if ( typeof scope.y2axisrange() === 'function' ) {
        chart.y2Axis.range( scope.y2axisrange() );
      }
    }
    if ( attrs.y2axisrangeband ) {
      chart.y2Axis.rangeBand( scope.y2axisrangeband() );
    }
    if ( attrs.y2axisrangebands ) {
      chart.y2Axis.rangeBands( scope.y2axisrangebands() );
    }
    if ( attrs.y2axisshowmaxmin ) {
      chart.y2Axis.showMaxMin( ( attrs.y2axisshowmaxmin === 'true' ) );
    }
    if ( attrs.y2axishighlightzero ) {
      chart.y2Axis.highlightZero( ( attrs.y2axishighlightzero === 'true' ) );
    }
    if ( attrs.y2axisrotatelabels ) {
      chart.y2Axis.rotateLabels( ( +scope.y2axisrotatelabels ) );
    }
    if ( attrs.y2axisrotateylabel ) {
      chart.y2Axis.rotateYLabel( ( attrs.y2axisrotateylabel === 'true' ) );
    }
    if ( attrs.y2axisstaggerlabels ) {
      chart.y2Axis.staggerlabels( ( attrs.y2axisstaggerlabels === 'true' ) );
    }
    if ( attrs.y2axislabeldistance ) {
      chart.y2Axis.axisLabelDistance( ( +attrs.y2axislabeldistance ) );
    }
  }

  function initializeMargin( scope, attrs ) {
    var margin = scope.$eval( attrs.margin ) || {
      left: 50,
      top: 50,
      bottom: 50,
      right: 50
    };
    if ( typeof margin !== 'object' ) {
      // we were passed a vanilla int, convert to full margin object
      margin = {
        left: margin,
        top: margin,
        bottom: margin,
        right: margin
      };
    }
    scope.margin = margin;
  }

  function checkElementID( scope, attrs, element, chart, data ) {
    configureXaxis( chart, scope, attrs );
    configureX2axis( chart, scope, attrs );
    configureYaxis( chart, scope, attrs );
    configureY1axis( chart, scope, attrs );
    configureY2axis( chart, scope, attrs );
    configureLegend( chart, scope, attrs );
    processEvents( chart, scope );
    var dataAttributeChartID;
    //randomly generated if id attribute doesn't exist
    if ( !attrs.id ) {
      dataAttributeChartID = 'chartid' + Math.floor( Math.random() * 1000000001 );
      angular.element( element ).attr( 'data-chartid', dataAttributeChartID );
      //if an id is not supplied, create a random id.
      if ( d3.select( '[data-chartid=' + dataAttributeChartID + '] svg' ).empty() ) {
        d3.select( '[data-chartid=' + dataAttributeChartID + ']' ).append( 'svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
      } else {
        d3.select( '[data-chartid=' + dataAttributeChartID + '] svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
      }
    } else {
      if ( angular.isArray( data ) && data.length === 0 ) {
        d3.select( '#' + attrs.id + ' svg' ).remove();
      }
      if ( d3.select( '#' + attrs.id + ' svg' ).empty() ) {
        d3.select( '#' + attrs.id ).append( 'svg' );
      }
      d3.select( '#' + attrs.id + ' svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
    }
  }

  angular.module( 'leansheetNvd3ChartDirectives', []).directive( 'nvd3LineChart', [
  	function () {
  		return {
  			restrict: 'EA',
	        scope: {
	          data: '=',
	          width: '@',
	          height: '@',
	          id: '@',
	          showlegend: '@',
	          tooltips: '@',
	          showxaxis: '@',
	          showyaxis: '@',
	          rightalignyaxis: '@',
	          defaultstate: '@',
	          nodata: '@',
	          margin: '&',
	          tooltipcontent: '&',
	          color: '&',
	          x: '&',
	          y: '&',
	          forcex: '@',
	          forcey: '@',
	          isArea: '@',
	          interactive: '@',
	          clipedge: '@',
	          clipvoronoi: '@',
	          interpolate: '@',
	          callback: '&',
	          useinteractiveguideline: '@',
	          xaxisorient: '&',
	          xaxisticks: '@',
	          xaxistickvalues: '&xaxistickvalues',
	          xaxisticksubdivide: '&',
	          xaxisticksize: '&',
	          xaxistickpadding: '&',
	          xaxistickformat: '&',
	          xaxislabel: '@',
	          xaxisscale: '&',
	          xaxisdomain: '&',
	          xaxisrange: '&',
	          xaxisrangeband: '&',
	          xaxisrangebands: '&',
	          xaxisshowmaxmin: '@',
	          xaxishighlightzero: '@',
	          xaxisrotatelabels: '@',
	          xaxisrotateylabel: '@',
	          xaxisstaggerlabels: '@',
	          xaxislabeldistance: '@',
	          yaxisorient: '&',
	          yaxisticks: '&',
	          yaxistickvalues: '&yaxistickvalues',
	          yaxisticksubdivide: '&',
	          yaxisticksize: '&',
	          yaxistickpadding: '&',
	          yaxistickformat: '&',
	          yaxislabel: '@',
	          yaxisscale: '&',
	          yaxisdomain: '&',
	          yaxisrange: '&',
	          yaxisrangeband: '&',
	          yaxisrangebands: '&',
	          yaxisshowmaxmin: '@',
	          yaxishighlightzero: '@',
	          yaxisrotatelabels: '@',
	          yaxisrotateylabel: '@',
	          yaxisstaggerlabels: '@',
	          yaxislabeldistance: '@',
	          legendmargin: '&',
	          legendwidth: '@',
	          legendheight: '@',
	          legendkey: '@',
	          legendcolor: '&',
	          legendalign: '@',
	          legendrightalign: '@',
	          legendupdatestate: '@',
	          legendradiobuttonmode: '@',
	          objectequality: '@',
	          transitionduration: '@'
	        },
	        controller: [
	          '$scope',
	          '$element',
	          '$attrs',
	          function ( $scope, $element, $attrs ) {
	            $scope.d3Call = function ( data, chart ) {
	              checkElementID( $scope, $attrs, $element, chart, data );
	            };
	          }
	        ],
	        link: function ( scope, element, attrs ) {
	        	scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.lineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).rightAlignYAxis( attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).clipVoronoi( attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true' ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  } );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }

  	};
  }
]);

}() );