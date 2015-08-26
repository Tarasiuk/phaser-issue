var gulp = require('gulp'),
    http = require('http'),
    express = require('express');

gulp.task('server', function() {

    var app = express();

    var httpServer = http.Server(app);
    httpServer.listen(config.server.port, function () {
    });

    app.use('/', express.static('./'));
});
