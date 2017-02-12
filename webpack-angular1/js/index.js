var angular = require('angular');
var app = angular.module('app', []);
require('./bands/band-info')(app);
require('./bands/bandList')(app);