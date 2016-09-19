// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/app.min.js': ['src/**/*.js']
        }
      }
    },
    concat: {
      options: {
        // separator: ';',
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/js/app.js',
      },
    },
    watch: {
      // for stylesheets, watch css and less files
      // only run less and cssmin stylesheets: {
      // files: ['src//*.css', 'src//*.less'],
      // tasks: ['less', 'cssmin'] },

    // for scripts, run jshint and uglify
    scripts: {
      files: 'src/**/*.js', tasks: ['jshint', 'uglify']
    }
  }
    // all of our configuration will go here
  });

  grunt.registerTask('build', ['jshint', 'uglify']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
