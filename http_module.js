const http = require("http");



// server.addListener
// server.emit

// Web Server

const server = http.createServer((req, res) =>{
  if(req.url === "/"){
    // res.setHeader("content-type", "text/plain")
    // res.write("Welcome to home page");

    res.setHeader("content-type", "text/html")
    res.write("<h1>Welcome to home page</h1>");
    res.end();
    
  }
  if(req.url === "/contact"){
    // res.setHeader("content-type", "text/plain")
    // res.write("Welcome to home page");

    res.setHeader("content-type", "text/html")
    res.write("<h1>Contact</h1>");
    res.end();
    
  }
});

const PORT = 3000;
server.listen(PORT, () => {
   console.log(`Listing on Port ${PORT}`);
});

