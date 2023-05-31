var express = require('express');
var bodyParser = require('body-parser');
const ap = express(); 

var app = express().use(bodyParser()).use(function (req, res)
{
    if(req.body.foo)
    {
        res.end('Body Parsed ! Value of foo '+res.body.foo);
    }
    else
    {
        res.end('Body Does not have foo !');
    }
}).use(function (err, req, res, next)
{
    res.end('Invalid body!');
}).listen(3000);
