module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
              files: ['src/sass/site/**/*.scss'],
              tasks: 'sass'
            },
            concat: {
              files: ['<%= pkg.dest %>/js/*.js'],
              tasks: 'concat'
            }
        },
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: [ '<%= pkg.dest %>js/jquery.js','<%= pkg.dest %>js/naturalscroll.js','<%= pkg.dest %>js/main.js'],
            dest: '<%= pkg.dest %>js/aranca-cn.js'
          }
        },
        uglify: {
          dist: {
            files: {
              'public/assets/js/aranca-cn.min.js': ['<%= concat.dist.dest %>']
            }
          }
        },
        sass: {
            dist: {
                options: {
                  style: 'compressed',
                  // nested , compact , compressed , expanded
                  sourcemap: 'auto',
                },
                files: {
                  'public/assets/css/main.css': 'src/sass/site/main.scss',
                }
            }
        },
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'concat', 'watch']);

};
