
const express = require('express')
const app = express()
const port = 3000

http = require('http'),
httpServer = http.Server(app);

app.use(express.static(__dirname + '/html_files'));

app.get('/', function(req, res) {
res.sendfile(__dirname + '/index.html');
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

app.get('/admin', function(req, res) {
    res.sendfile(__dirname + '/admin.html');
    });

    
app.get('*', function(req, res) {
    res.sendfile(__dirname + '/404.html');
    });

     
        app.get('/admin', function(req, res) {
            var roleName = 'admin';
            if(req.query.hasOwnProperty('role')&&(req.query.role == roleName))
            res.end(`welcome${roleName}`);
            else
            res.sendfile(__dirname + '/login.html');

            });
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})