#!/usr/bin/env node
require('babel-core/register');

var apiService = require('./services/api');

apiService.call();
