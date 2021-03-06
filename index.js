// Importing required packages 
var fs = require('fs');
var path = require('path');
var http = require('http');
require('dotenv').config();
// Creating the server
var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Reading the directory
    fs.readdir('D:\\Task', (err, files) => {
        if (err) throw err;
        var myString = '';
        files.forEach((item) => {
            // Finding the type of files
            var extensiontype = path.extname(item);
            if (extensiontype === '.png') {
                myString += `<div><img src="https://bit.ly/32qUflZ" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.jpg') {
                myString += `<div><img src="https://bit.ly/36anrig" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.pdf') {
                myString += `<div><img src="https://bit.ly/36hbnfe" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.pptx') {
                myString += `<div><img src="https://bit.ly/2U9hXys" width="20px" height="20px"> ${item}</div>`;
            } else if (extensiontype === '.mp3') {
                myString += `<div><img src="https://bit.ly/38lNmX1" width="20px" height="20px"> ${item}</div>`;
            }
        });
        res.end(`<div>${myString}</div>`);
    });
});

const port = process.env.PORT || 5001;
// Listening to the server
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});