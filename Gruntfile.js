module.exports = function(grunt) {
	grunt.initConfig({
		
		//------------Start the server
		express :  {
			options : {
				port: 4000,
				spawn : false
			},
			dev : {
				options : {
					script : 'server.js',
					background: false
				}
			},
			prod : {
			},
			test : {
				options : {
					script : 'server.js',
					background : true
				}
			}
		},
		
		//------------Check all js files for errors
		jshint: {
			all : ['app/**/*.js','scripts/**/*.js']
		},
		
		//Run Tests using mocha
		mochaTest: {
		  test: {
		    options: {
			  reporter: 'min',
			  quiet: true
		    }
  		  },
		  src: ['app/**/*.test.js','scripts/**/*.test.js']
		},		
		
		
		
		//------------Clean the previous files
		
		//------------Annotate First
		//Stroing the annotated files in scripts/fullAppWithAnnotation.js
		//which is then ugligied and moved to dist/js/app.min.js
		//------------Uglify all js files and put into app.min.js
		
		
		
		//------------Ugligy all the css files
		
		
	});
	
	//Load task before registering
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');
	//grunt.loadNpmTasks('grunt-ng-annotate');
	//grunt.loadNpmTasks('grunt-contrib-clean');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-express-server');
	
	
	//Register the Grunt task with required modules
	grunt.registerTask('default',['jshint','express:dev']);
	//For mocha to test API's we need the server to be up somewhere
	grunt.registerTask('test',['jshint','express:test','mochaTest']);
};