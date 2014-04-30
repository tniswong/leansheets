module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt, {
      pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

	// Time how long tasks take. Can help when optimizing build times.
	require('time-grunt')(grunt);

	// variables for grunt.initConfig()
	var meta = {
			src: {
				main: 'app/js',
				test: 'test/unit'
			},
			bin: {
				coverage: 'bin/coverage'
			},
			httpPort: 8080,		// default http port
			livereload: 35729	// degault port livereload listens
		};

	// Define the configuration for all the tasks.
	grunt.initConfig({
		// Connect web server
		connect: {
			options: {
				port: meta.httpPort,
				hostname: 'localhost',
				livereload: meta.livereloadPort
			},
			livereload: {
				options: {
					open: {
						target: 'http://localhost:' + meta.httpPort
					},
					base: [
						'./' + meta.src.main
					]
				}
			}
		},
		// Set up watch so that web server started from
		// the connect options (above) will keep the server
		// running and not stop the task bc if the task
		// stops then the sever will stop.
		watch: {
			options: {
				nospawn: true
			},
			livereload: {
				options: {
					livereload: meta.livereloadPort
				},
				files: [
					meta.src.main + '/*.js',
					meta.src.main + '/*.html'
				]
			},

			// Watch files when Karma task is run.
			// karma: {
   //              files: [ meta.src.main + '/**/*.js', meta.src.test + '/**/*.js'],
   //              tasks: ['karma:unit:run']
   //          }
		},

		// Unit test configurations
		karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

		// Jasmine tests tasks
		// jasmine: {
		// 	coverage: {
		// 		src: [
		// 			meta.src.main + '/**/*.js',
		// 			'!' + meta.src.main + '/bower_components/**/*'
		// 		],
		// 		options: {
		// 			specs: meta.src.test + '/*.js',
		// 			template: require('grunt-template-jasmine-istanbul'),
		// 			templateOptions: {
		// 				coverage: meta.bin.coverage + '/coverage.json',
		// 				report: [
		// 					{
		// 						type: 'html',
		// 						options: {
		// 							dir: meta.bin.coverage + '/html'
		// 						}
		// 					},
		// 					{
		// 						type: 'cobertura',
		// 						options: {
		// 							dir: meta.bin.coverage + '/cobertura'
		// 						}
		// 					},
		// 					{
		// 						type: 'text-summary'
		// 					}
		// 				],
		// 				// what files to interment with code coverage
		// 				files: [
		// 					meta.bin.main + '/**/*',
		// 					'!' + meta.bin.main + '/bower_components/**/*'
		// 				]
		// 			}
		// 		}
		// 	}
		// },

		// Clean tasks
		clean: {
			coverageReport: meta.bin.coverage 	// removes the bin/coverage directory
		}
	});

	grunt.registerTask('default', []);

	// start server
	grunt.registerTask('server',['server:start']);
	grunt.registerTask('server:start',['connect','watch']);

	// test tasks
	// grunt.registerTask('test',['test:coverage']);
	// grunt.registerTask('test:all',['test']);
	// grunt.registerTask('test:coverage', ['jasmine:coverage']);
	grunt.registerTask('karma:test',['karma']);//,'watch:karma']);

	// clean tasks
	//grunt.registerTask('clean',['clean:coverage']);
	grunt.registerTask('clean:all', ['clean:coverage']);
	grunt.registerTask('clean:coverage',['clean:coverageReport']);
};