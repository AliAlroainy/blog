
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
    res.redirect( '/');
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
    res.redirect('/login');
    });

// app.get('/admin', function(req, res) {
//     res.sendfile(__dirname + '/login.html');
//     });

    app.get('/about', function(req, res) {
        res.sendfile(__dirname + '/about.html');
        });

        app.get('/about.html', function(req, res) {
            res.redirect( '/about');
            });

        app.get('/contact', function(req, res) {
            res.sendfile(__dirname + '/contact.html');
            });

            app.get('/contact.html', function(req, res) {
                res.redirect('/contact');
                });

    


    app.get('/404.html', function(req, res) {
        res.redirect('/404');
        });

        app.get('/admin.html', function(req, res) {
            res.redirect('/login');
            });
     
        app.get('/admin', function(req, res) {
            var roleName = 'admin';
            console.log(req.query.hasOwnProperty('role'));

            if( req.query.hasOwnProperty('role') && (req.query.role == roleName) )
            res.sendfile(__dirname + '/admin.html');
            else
            res.sendfile(__dirname + '/login.html');
            });
  

            app.use(function(req, res) {
                res.sendfile(__dirname + '/404.html');
                });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})