
var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');


// Here we require the prerender middleware that will handle requests from Search Engine crawlers
// We set the token only if we're using the Prerender.io service
app.use(require('prerender-node').set('prerenderToken', 'YOUR-TOKEN-HERE'));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(3000);
console.log("Go Prerender Go!");
