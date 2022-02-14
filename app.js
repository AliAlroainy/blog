
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


     
        // app.get('/admin/?role='{var a }'', function(req, res) {
        //     res.write(req.params);

        //     });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})