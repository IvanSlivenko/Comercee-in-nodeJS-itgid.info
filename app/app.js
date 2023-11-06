const http = require('http');
const fs = require('fs');



// http.createServer().listen(3000);
http.createServer(function (request, respons) {
  
  // console.log(request.url);
  // console.log(request.method);
  // console.log(request.headers['user-agent']);
  
  respons.setHeader("Content-Type",
    "text/html; charset=utf-8;")
  
  if (request.url == "/") {
    respons.end("Main <b>Hello<b> Привіт");
  } else if (request.url === "/cat")
    respons.end("Category <h2> Hello <h2> Привіт з Категорії");
  else if (request.url === "/dat") {
    let myFile = fs.readFileSync('1.dat');
    console.log(myFile);
    respons.end(myFile);;
  }

  
}).listen(3000);



 
