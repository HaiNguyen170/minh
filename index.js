var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello');
});

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
    console.log("Listening on port" + port + "...");
});