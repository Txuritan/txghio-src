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
		clean: {
			build: ['build/*'],
			dist: ['dist/*']
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			build: {
				tasks: ['watch:babel', 'watch:less']
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					flatten: true,
					src: ['src/index.html', 'src/javascript/fastclick.js'],
					dest: 'build/'
				}]
			}
		},
		env: {
			dev: {
				NODE_ENV: 'development'
			},
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
			options: {
				plugins: [
					new(require('less-plugin-autoprefix'))({
						browsers: ["last 2 versions"]
					})
				]
			},
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

	grunt.registerTask('dev', [
		'env:dev',
		'clean',
		'browserify:build',
		'less:build',
		'copy:build',
		'inline:build',
		'concurrent:build'
	]);
	grunt.registerTask('build', [
		'env:build',
		'clean',
		'browserify:build',
		'less:build',
		'copy:build',
		'inline:build',
		'clean:build'
	]);
};
