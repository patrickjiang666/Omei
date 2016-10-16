
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , login = require('./routes/login')
  , order = require('./routes/order')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('case sensitive routing', false);

////view engine setup
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

//everything under .set is considered middle-ware.
//middle-ware: different functions be invoked by express routing layer
//before final req handler is made==>
//(http request):: middle-ware :: (http response)
//the order matters here
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser()); 
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//define routes
app.get('/', function(req,res){
	res.send("Express Works!");
});
app.get('/login', login.login);
app.get('/order', order.order);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
