module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Transpile LESS
    less: {
      dev: {
        files: {
          "dist/style.css": "src/style.less"
        }
      },
      prod: {
        options: {
          compress: true
        },
        files: {
          "dist/style.css": "src/style.less"
        }
      }
    },

    // Clean folders before running a build
    clean: [
      'build',
      'dist',
      'fonts'
    ],

    // Copy Font-Awesome and FontCustom fonts
    copy: {
      fonts: {
        files: [{
          expand: true,
          src: [
            'bower_components/font-awesome/fonts/*',
            'src/fontcustom/fonts/*'
          ],
          dest: 'fonts/',
          flatten: true
        }]
      }
    }

  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('dev', ['clean', 'less:dev', 'copy:fonts']);
  grunt.registerTask('prod', ['clean', 'less:prod', 'copy:fonts']);

};
