module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
    snowbuild: {
      files: {
        'canvas-snow.min.js': ['canvas-snow.js']
      }
    }
  }


  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
}
