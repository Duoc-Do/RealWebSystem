module.exports = function(grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        includereplace: 'grunt-include-replace'
    });

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        base: {
            src: 'src',
            dist: 'dist',
            temp: 'temp',
            includes: '<%= base.src %>/includes'
        },

        clean: {
            tmp: '<%= base.temp %>',
            dist: '<%= base.dist %>'
        },

        copy: {
            js: {
                src: '**/*.*',
                cwd: '<%= base.src %>/js',
                dest: '<%= base.dist %>/js',
                expand: true
            },
            font: {
                src: '**/*.*',
                cwd: '<%= base.src %>/fonts',
                dest: '<%= base.dist %>/fonts',
                expand: true
            },
            img: {
                src: '**/*.*',
                cwd: '<%= base.src %>/images',
                dest: '<%= base.dist %>/images',
                expand: true
            },
            css: {
                src: '**/*.*',
                cwd: '<%= base.src %>/css',
                dest: '<%= base.dist %>/css',
                expand: true
            }
        },

        includereplace: {
            dist: {
                options: {
                    includesDir: '<%= base.includes %>'
                },
                files: [{
                    src: ['**/*.html', '!includes/*.html'],
                    cwd: '<%= base.src %>',
                    dest: '<%= base.dist %>',
                    expand: true
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    noCache: true,
                    style: 'expanded'
                },
                files: [{
                    src: 'bootstrap.scss',
                    cwd: '<%= base.src %>/scss',
                    dest: '<%= base.dist %>/css',
                    ext: '.css',
                    expand: true
                }, {
                    src: 'main.scss',
                    cwd: '<%= base.src %>/scss',
                    dest: '<%= base.dist %>/css',
                    ext: '.css',
                    expand: true
                }, {
                    src: 'effects.scss',
                    cwd: '<%= base.src %>/scss',
                    dest: '<%= base.dist %>/css',
                    ext: '.css',
                    expand: true
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 9'],
                cascade: false,
                remove: true
            },
            main: {
                src: '<%= base.dist %>/css/main.css',
                dest: '<%= base.dist %>/css/main.css'
            },
            effects: {
                src: '<%= base.dist %>/css/effects.css',
                dest: '<%= base.dist %>/css/effects.css'
            }
        },

        csscomb: {
            options: {
                config: 'csscomb.json'
            },
            dist: {
                files: {
                    '<%= base.dist %>/css/main.css': ['<%= base.dist %>/css/main.css']
                }
            }
        },

        jshint: {
            options: {
                jshintrc: true,
                force: true
            },
            files: '<%= base.src %>/js/main.js'
        },

        watch: {
            options: {
                spawn: false
            },
            html: {
                files: '<%= base.src %>/**/*.html',
                tasks: ['includereplace']
            },
            sass: {
                files: '<%= base.src %>/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
            js: {
                files: '<%= base.src %>/js/*.*',
                tasks: ['copy:js', 'jshint']
            },
            font: {
                files: '<%= base.src %>/fonts/*.*',
                tasks: ['copy:font']
            },
            img: {
                files: '<%= base.src %>/images/**/*.*',
                tasks: ['copy:img']
            },
            css: {
                files: '<%= base.src %>/css/*.*',
                tasks: ['copy:css']
            }
        }
    });

    // Task
    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'includereplace',
        'copy:font', 'copy:img', 'copy:css',
        'sass', 'autoprefixer', 'csscomb',
        'copy:js', 'jshint',
        'clean:tmp'
    ]);

};
