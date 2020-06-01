const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile SASS and Move Font-Awesome CSS
function scss(){
	//1. Where is sass file
		return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './assets/scss/*.scss', './node_modules/font-awesome/css/font-awesome.min.css'])
	//2. Pass that file through sass Compiler
		.pipe(sass())
	//3. Where I save my CSS File
		.pipe(gulp.dest('./assets/css/'))
	// Browser Stream
	.pipe(browserSync.stream())
}

// Move JS file to Assets 
function js(){
	//1. Where is JS file
		return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/popper.min.js'])
	//3. Where I save my JS File 
		.pipe(gulp.dest('./assets/js/'))
	// Browser Stream
	.pipe(browserSync.stream())
}

// Watch SASS and Serve
function liveServer(){
	browserSync.init({
		server: './'
	});
	gulp.watch('./assets/scss/*.scss', scss);
	gulp.watch('./assets/js/*.js', js);
	gulp.watch('./assets/fonts/', fonts);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

// Move Font_Awesome Fonts Folder to Assets 
function fonts(){
	//1. Where is Fonts Folder
		return gulp.src('./node_modules/font-awesome/fonts/*')
	//3. Where I save my Fonts Folder 
		.pipe(gulp.dest('./assets/fonts/'))
}




exports.scss = scss;
exports.fonts = fonts;
exports.js = js;
exports.liveServer = liveServer;
