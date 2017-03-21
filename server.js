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
