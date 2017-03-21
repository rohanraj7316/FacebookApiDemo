const fs = require('fs');
const Guid = require('guid');
const express = require('express');
const bodyParser = require('body-parser');
const Mustache = require('mustache');
const Request  = require('request');
const Querystring  = require('querystring');
const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

var csrf_guid = Guid.raw();
const account_kit_api_version = 'v2.8';
const app_id = '1384690528260354';
const app_secret = '96836dea0779d359a40d825e2805e2fc';
const me_endpoint_base_url = 'https://graph.accountkit.com/{{ACCOUNT_KIT_API_VERSION}}/me';
const token_exchange_base_url = 'https://graph.accountkit.com/{{ACCOUNT_KIT_API_VERSION}}/access_token';
<html>
<head>
<title> this is first facebook aplication </title>
<script src="//connect.facebook.net/en_US/sdk/debug.js"></script>
    </head>
    <p id="status">this is just a paragraph</p>

<fb:login-button
scope="public_profile"
onlogin="checkLoginState();">
    </fb:login-button>
<button onclick="myFacebookLogin()">Login with Facebook</button>
<script>

window.fbAsyncInit = function(){
    FB.init({
        appId : '1384690528260354',
        xfbml : true,
        version : 'v2.8'
    });
    FB.AppEvents.logPageView();
};
(function(d,s,id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)){return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

FB.ui({
    method : 'share_open_graph',
    action_type:'og.likes',
    action_properties:JSON.stringify({
        object:'https://developers.facebook.com/docs/'
    })
},function(responcse){
    console.log(responcse);
});
FB.getLoginStatus(function(response){
    if(response.status === 'connected'){
        console.log('Logged in.');
    }else{
        FB.login();
    }
});
function myFacebookLogin() {
    FB.login(function () {

    },{ scope : 'publish_actions'});
}
FB.login(function () {
    FB.api('/me/feed','post',{message:'Hello worls'});

},{scope:'publish_actions'});
</script>
</html>