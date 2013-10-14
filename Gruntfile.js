module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'dist/backbone-jsonapi.js': ['src/umd.js']
        },
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v <%= pkg.version %> - Copyright <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/backbone-jsonapi.min.js': ['dist/backbone-jsonapi.js']
        }
      }
    },
    replace: {
      example: {
        src: ['src/backbone-jsonapi.js'],
        dest: 'src/backbone-jsonapi.js',
        replacements: [{
          from: /module.exports.VERSION = '[0-9]+\.[0-9]+\.[0-9]+';/,
          to: 'module.exports.VERSION = \'<%= pkg.version %>\';'
        }]
      }
    },
    clean: ['dist/backbone-jsonapi.js'],
    mochaTest: {
      all: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js', '!test/mock/**']
      }
    },
    jshint: {
      options: {
        indent: 2,
        camelcase: true,
        nonew: true,
        plusplus: true,
        quotmark: true,
        bitwise: true,
        forin: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        undef: true,
        unused: true,
        regexp: true,
        trailing: true,
        node: true,
        browser: true
      },
      gruntfile: {
        files: {
          src: ['Gruntfile.js']
        }
      },
      dev: {
        files: {
          src: ['src/**/*.js']
        },
        options: {
          debug: true,
          devel: true
        }
      },
      dist: {
        files: {
          src: ['src/**/*.js']
        }
      },
      test: {
        files: {
          src: ['test/**/*.js']
        },
        options: {
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('dist', ['replace', 'browserify', 'uglify', 'clean']);
  grunt.registerTask('default', ['jshint', 'mochaTest', 'dist']);
};