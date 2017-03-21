/**
 * Created by ROHANRAJ on 20-03-2017.
 */
var express = require('express');
var morgan = require('morgan');
var Facebook = require('facebook-node-sdk');
//var facebook = new Facebook({appID : '1384690528260354',secret:'96836dea0779d359a40d825e2805e2fc'});
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var request = require('request');
app.use(bodyParser());
app.use(cookieParser());
app.use(Facebook.middleware({appId:'1384690528260354',secret:'96836dea0779d359a40d825e2805e2fc'}));
app.get('/facebooklogin',function (req,res,next) {
    res.sendFile(__dirname+'/index.html');
});
app.get('/',Facebook.loginRequired(),function (req,res) {
    req.facebook.api('/facebooklogin/sucess',function (err,user) {
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end("hello, "+user.name + '!');
    });
});

app.post('/postapost',function (req,res) {
    request.post({url:'https://graph.facebook.com/me/feed',form : { message:"hello"}});
})
app.listen(8080,function () {
   console.log('server is running on port no 8080');
});