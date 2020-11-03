var express = require('express');
var app = express();
var security = require('./security.js');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
  res.redirect('index.html');
});

app.post('/api/security/validate-password', function(req,res) {
    var password = req.body.password;
    var valid = security.validatePassword(password);
    res.send(valid);
});

app.listen(3000, function() {
  console.log('Esperando conexiones en el puerto 3000...');
});
