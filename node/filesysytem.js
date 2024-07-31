const http = require('http');
const fs = require('fs');

// Refer This https://www.w3schools.com/nodejs/nodejs_filesystem.asp

// Read a File

/* http.createServer(function (req, res) {
  //Open a file on the server and return its content:
 
  const data = fs.readFile('demo.html',(err,data) => {
    console.log('data1111',data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  return data;

}).listen(8080); */


//create a file named mynewfile1.txt:
/* fs.appendFile('mynewfile1.js', 'console.log("Hello Content!")', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); */


/*   fs.writeFile('mynewfile1.js', 'console.log("haiiiiiiiiii")', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); */

  fs.rename('mynewfile1.js', 'myrenamedfile.js', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });