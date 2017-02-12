console.log('App loaded');

var config = require('../config/config.json');

$('#testDiv').text('jQuery modified this content(app.js)');
console.log($('#testDiv').text);
console.log(config.app_loaded_msg);

require('../css/style.css');