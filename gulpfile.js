/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const typescript = require('gulp-typescript')
const merge2 = require('merge2')
const pkg = require('./package')

function build() {
  const tsResult = gulp
    .src(`src/*.ts`)
    .pipe(gulp.dest('lib'))
    .pipe(
      typescript({
        target: 'ES5',
        declaration: true,
      })
    )

  return merge2([
    tsResult.dts.pipe(gulp.dest('./lib')),
    tsResult.js.pipe(gulp.dest('./lib')),
  ])
}

gulp.task('dist', gulp.series(build))
