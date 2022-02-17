
const express = require('express')
const app = express()
const port = 3000

http = require('http'),
httpServer = http.Server(app);

app.use(express.static(__dirname + '/html_files'));

app.get('/', function(req, res) {
res.sendfile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res) {
    res.sendfile(__dirname + '/');
    });

app.get('/blog', function(req, res) {
    res.sendfile(__dirname + '/index.html');
    });

    app.get('/home', function(req, res) {
        res.sendfile(__dirname + '/index.html');
        });

app.get('/login', function(req, res) {
res.sendfile(__dirname + '/login.html');
});

app.get('/login.html', function(req, res) {
    res.sendfile(__dirname + '/login');
    });

app.get('/admin', function(req, res) {
    res.sendfile(__dirname + '/login.html');
    });

    app.get('/about', function(req, res) {
        res.sendfile(__dirname + '/about.html');
        });

        app.get('/about.html', function(req, res) {
            res.sendfile(__dirname + '/about');
            });

        app.get('/contact', function(req, res) {
            res.sendfile(__dirname + '/contact.html');
            });

            app.get('/contact.html', function(req, res) {
                res.sendfile(__dirname + '/contact');
                });

    
app.get('*', function(req, res) {
    res.sendfile(__dirname + '/404.html');
    });

    app.get('/404.html', function(req, res) {
        res.sendfile(__dirname + '/404');
        });

        app.get('/admin.html', function(req, res) {
            res.sendfile(__dirname + '/login');
            });
     
        app.get('/admin', function(req, res) {
            var roleName = 'admin';
            if( req.query.hasOwnProperty('role') && (req.query.role == roleName) )
            res.sendfile(__dirname + '/admin');
            else
            res.sendfile(__dirname + '/login.html');
            });
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})