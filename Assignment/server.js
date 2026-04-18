const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Set common header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Routing
  if (path === "/" || path === "/dashboard") {
    res.write(`
      <html>
        <head>
          <title>Dashboard</title>
        </head>
        <body style="font-family: Arial; text-align:center;">
          <h1>Dashboard Page</h1>
          <p>Welcome to the Dashboard</p>
          <a href="/about">Go to About Us</a>
        </body>
      </html>
    `);
  } 
  else if (path === "/about") {
    res.write(`
      <html>
        <head>
          <title>About Us</title>
        </head>
        <body style="font-family: Arial; text-align:center;">
          <h1>About Us Page</h1>
          <p>This is a Node.js application using core modules.</p>
          <a href="/dashboard">Go to Dashboard</a>
        </body>
      </html>
    `);
  } 
  else {
    res.write(`
      <html>
        <head>
          <title>404</title>
        </head>
        <body style="text-align:center;">
          <h1>404 - Page Not Found</h1>
        </body>
      </html>
    `);
  }

  res.end();
});

// Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});