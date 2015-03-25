module.exports = function (grunt) {

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
		}
	},
	'<%= pkg.name %>': { 
		src: ['src/js/**/*.js']
	}
});
};