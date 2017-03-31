var gulp = require('gulp'),
exec = require('child_process').exec;
//start app.
gulp.task('default', [], function() {
    exec('npm run start', function(err){
    });
});



