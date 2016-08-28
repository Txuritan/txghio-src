module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);
	grunt.initConfig({
		browserify: {
			build: {
				options: {
					transform: [
						[
							'babelify', {
								presets: ['es2015', 'react']
							}
						]
					]
				},
				src: ['src/javascript/sakuraui.js'],
				dest: 'build/sakuraui.js'
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			build: {
				tasks: ['watch:babel', 'watch:less']
			}
		},
		env: {
			build: {
				NODE_ENV: 'production'
			}
		},
		inline: {
			options: {
				cssmin: true,
				uglify: true
			},
			build: {
				src: 'build/index.html',
				dest: 'dist/index.html'
			}
		},
		less: {
			build: {
				files: {
					'build/sakuraui.css': 'src/less/sakuraui.less'
				}
			}
		},
		watch: {
			babel: {
				files: ['src/**/*.js'],
				tasks: ['browserify:build', 'inline:build']
			},
			less: {
				files: ['src/**/*.less'],
				tasks: ['less:build', 'inline:build']
			}
		}
	});

	grunt.registerTask('dev', ['browserify:build', 'less:build', 'inline:build', 'concurrent:build']);
	grunt.registerTask('build', ['env:build', 'browserify:build', 'less:build', 'inline:build']);
};
