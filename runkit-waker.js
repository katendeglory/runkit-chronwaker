const https = require('https');
const url = "https://chron-waker.onrender.com"; 

console.log("Initializing the Chron...");

exports.endpoint = function (req, res) {
  try {
    https
        .get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => {data += chunk;});
            response.on('end', () => { console.log('Response data:', data)});
        })
        .on('error', (err) => { console.log('Error:', err.message);});
   
    res.end("@@ Waking up main chron...");
    
  } catch (err) {
    res.end(`@@ An error occured: ${err.message}`);
  }
}
