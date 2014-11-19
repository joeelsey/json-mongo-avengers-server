module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
        //express: true
        //mongo: true
        //mongoose: true
      },
      src:['models/**/*.js', 'server.js', 'routes/**/*.js']
    },

    simplemocha: {
      src:['test/api/**/*.js']
    }
  });

  grunt.registerTask('test',['jshint', 'simplemocha']);
}
