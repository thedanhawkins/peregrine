var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var runSequence = require('run-sequence');
var del = require('del');
var projectName = __dirname.substr(__dirname.lastIndexOf('/') + 1);

gulp.task('clean', function(callback) {
    del(['dist/*'], callback);
});

gulp.task('markup', function() {
    //Move markup in to place
    return gulp.src(['assets/markup/**/*', 'assets/markup/**/.*'])
    .pipe(gulp.dest('dist/'+projectName));
});

gulp.task('styles', function() {
    //Process theme Sass - run Sass, autoprefix, minify, concat main and vendor, put in dist assets
    return gulp.src(['assets/stylesheets/vendor/*', 'assets/stylesheets/main.scss'])
    .pipe(plugins.sass({ style: 'expanded', includePaths: ['node_modules/foundation-sites/scss/'] }))
    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(plugins.minifyCss())
    .pipe(plugins.concat('main.css'))
    .pipe(plugins.rev())
    .pipe(gulp.dest('dist/'+projectName+'/assets/stylesheets'))
    .pipe(plugins.rev.manifest('css-manifest.json'))
    .pipe(gulp.dest('dist/'+projectName+'/manifests/'));
});

gulp.task('scripts', function() {
    //Process theme javascript - concat vendor, app and helpers, then uglify, then put in dist assets
    return gulp.src(['assets/javascripts/vendor/*.js', 'assets/javascripts/*.js'])
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rev())
    .pipe(gulp.dest('dist/'+projectName+'/assets/javascripts'))
    .pipe(plugins.rev.manifest('js-manifest.json'))
    .pipe(gulp.dest('dist/'+projectName+'/manifests/'));
});

gulp.task('extra-scripts', function() { 
    //Put extra javascripts in dist assets
    return gulp.src('assets/javascripts/extra/*.js')
    .pipe(plugins.babel({
        presets: ['es2015'],
        compact: false
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/'+projectName+'/assets/javascripts'));
});

gulp.task('images', function() {
    // Optimise images and put in dist assets
    return gulp.src('assets/images/**/*')
    .pipe(plugins.imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/'+projectName+'/assets/images'));
});

gulp.task('fonts', function() {
    //Put fonts in dist assets
    return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('dist/'+projectName+'/assets/fonts'));
});

gulp.task('rev', function () {
    var manifest = gulp.src('dist/'+projectName+'/manifests/*.json');
    return gulp.src('assets/markup/*')
    .pipe(plugins.revReplace({replaceInExtensions:['.html', '.php'], manifest: manifest}))
    .pipe(gulp.dest('dist/'+projectName+'/'));
});


// When working on the package for the first time, gulp build should be run. The deafault task can then be used for development. 
gulp.task('build', function(callback) {
   runSequence('clean', ['markup', 'styles', 'scripts', 'extra-scripts', 'images', 'fonts'], 'rev', callback);
});

gulp.task('default', function() {
   runSequence(['markup', 'styles', 'scripts'], 'rev');
});

gulp.task('watch', function() {
    return gulp.watch('assets/**/*', ['default']);
});