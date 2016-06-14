#!/usr/bin/env node
require('babel-core/register');

var strategy1Service = require('./services/strategy2');

strategy1Service.whatsItGoingToBeLikeTomorrow().then(weather =>
    console.log(weather)
);
