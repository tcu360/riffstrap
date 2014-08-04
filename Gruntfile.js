// The scripts to concatenate to form our single
// dist/script.js file. Storing them here reduces
// unnecessary duplication.
var scripts = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/js/**.js',
  'src/script.js'
];

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Transpile LESS
    less: {
      options: {
        // See src/custom-bootstrap/bootstrap.less for an
        // explanation of why this is line is necessary
        paths: ['bower_components/bootstrap/less']
      },
      dev: {
        files: {
          "dist/style.css": "src/style.less"
        }
      },
      prod: {
        options: {
          compress: true,
          cleancss: true
        },
        files: {
          "dist/style.css": "src/style.less"
        }
      }
    },

    // Run our JavaScript (but not bower scripts) through JSHint
    jshint: ['src/script.js'],

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
          'dist/script.js': scripts
        }
      },
      prod: {
        options: {
          sourceMap: true
        },
        files: {
          'dist/script.js': scripts
        }
      }
    },

    // Clean folders before running a build
    clean: [
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
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('dev', ['jshint', 'clean', 'less:dev', 'uglify:dev', 'copy:fonts']);
  grunt.registerTask('prod', ['jshint', 'clean', 'less:prod', 'uglify:prod', 'copy:fonts']);

};
