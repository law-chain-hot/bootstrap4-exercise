'use strict';

module.exports = function(grunt) {
    
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);
    
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/styles.css'
                }
            }
        },
        watch: {
            files: 'css/*.scss', 
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync', 'watch']);
}