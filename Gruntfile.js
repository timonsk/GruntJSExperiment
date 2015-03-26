module.exports = function (grunt) {
//Configure
grunt.initConfig({
	pkg: grunt.file.readJSON("package.json"),

	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			eqnull: true,
			browser: true,
			globals: { jQuery: true, $: true, console: true}
		},

		'<%= pkg.name %>': { 
		src: ['src/js/**/*.js']
		}	
	},

	concat: {
		options: {
			stripBanners: true,
			banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("hh:MM:ss_yyyy-mm-dd") %> */\n'
		},
		dist: {
			src: ['src/js/**/*.js'],
			dest: '_bin/build.js'
		}
	},

	uglify: {
		options: {
			stripBanners: true,
			banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("hh:MM:ss_yyyy-mm-dd") %> */\n'
		},
		build: {
			src: '_bin/build.js',
			dest: '_bin/build.min.js'
		}
	},

	cssmin: {
		with_banner: {
			options: {
				banner: '/* Minified CSS - <%= grunt.template.today("hh:MM:ss_yyyy-mm-dd") %> */'
			},

			files: {
			'_bin/style.min.css': ['src/css/**/*.css'],
			}
		}
	},
	watch: {
		scripts: {
			files: ['src/js/**/*.js'],
			tasks: ['jshint', 'concat', 'uglify', 'removelogging']
		},
		css: {
			files: ['src/css/**/*.css'],
			tasks: ['cssmin']
		}
	},
	removelogging: {
		dist: {
			src: '_bin/build.min.js',
			dest: '_bin/build.clean.js'
		}
	}
});
// Load modules
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-remove-logging');
// Register task
grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin',  'removelogging', 'watch']);

};