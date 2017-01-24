var http = require('http');
var data = require('./films.json');

for (var i = 0; i < data.length; i++) {
  var postData = `{ "title":${JSON.stringify(data[i])} }`;

  var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/films',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  var req = http.request(options, function(res) {
    res.on('data', function(data) {
      console.log(`BODY: ${data}`);
    });
  });

  req.on('error', function(err) {
    console.log(`problem with request: ${err.message}`);
  });

  req.write(postData);
  req.end();
}