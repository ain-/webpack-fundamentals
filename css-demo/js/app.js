console.log('App loaded');

var img = document.createElement('img');
img.style.height = "25%";
img.src = require('../images/peacock.jpg');

document.getElementById('img_container').appendChild(img);

require('../css/bootstrap.css');
require('../css/app.scss');
require('../css/app2.less');