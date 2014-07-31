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

    // Concatenate and (sometimes) minify JavaScript
    uglify: {
      dev: {
        options: {
          compress: false,
          beautify: true,
          mangle: false,
          preserveComments: 'all'
        },
        files: {
          'dist/script.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/js/**.js',
            'src/script.js'
          ],
        }
      },
      prod: {
        files: {
          'dist/script.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/js/**.js',
            'src/script.js'
          ],
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
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('dev', ['clean', 'less:dev', 'uglify:dev', 'copy:fonts']);
  grunt.registerTask('prod', ['clean', 'less:prod', 'uglify:prod', 'copy:fonts']);

};
