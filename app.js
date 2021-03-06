
var express = require('express');
var path = require('path');
var app = express();

// Here we require the prerender middleware that will handle requests from Search Engine crawlers
// We set the token only if we're using the Prerender.io service
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000'));

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
console.log("Go Prerender Go!");

// http://localhost:3000/?_escaped_fragment_=
