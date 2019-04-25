module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/assets/js/script.min.js': ['assets/js/script.js']
        }
      }
    },
    less: {
      production: {
        options: {
          paths: ['assets/css'],
          compress: ['dist/assets/css/styles.min.css']
        },
        files: {
          'dist/assets/css/styles.min.css': 'assets/css/styles.less',
        }
      }
    }
  });
  
  // Less Compile task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // JS task.
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);
  
};