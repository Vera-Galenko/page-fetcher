const request = require('request');
const fs = require('fs');
const mes = process.argv.slice(2);

request(mes[0], function (error, response, body) {
 if (error != null) {
        console.log('ERROR - page not found:', error);
      }
 fs.writeFile(mes[1], body, function (err) {
    if (err){  
        // throw err;
        console.log('ERROR: ', err);}
    console.log(`Downloaded and saved ${body.length * 2} bytes to ${mes[1]}`);
  });
});