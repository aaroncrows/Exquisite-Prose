module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint:{
      options:{
        jshintrc:true
      },
    files:['*.js', 'lib/**/*.js', 'test/**/*.js',
            'routes/**/*.js', 'models/**/*.js']
    },
    jscs: {
      all: {
        options: {
          config:'.jscsrc'
        },
        files: {
          src: ['*.js', 'lib/**/*.js', 'test/**/*.js',
                  'routes/**/*.js', 'models/**/*.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'jscs']);

};
