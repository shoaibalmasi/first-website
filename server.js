const http = require('http');
const fs = require('fs');


// create server
http.createServer((req, res) => {


   if (req.url === '/home' && req.method === 'GET') {
      fs.readFile('public/index.html', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
   } else if (req.url === '/bootstrap.jpg' && req.method === 'GET') {
      fs.readFile('public/images/bootstrap.jpg', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
   } else if (req.url === '/css.jpg' && req.method === 'GET') {
      fs.readFile('public/images/css.jpg', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
   } else if (req.url === '/style.css' && req.method === 'GET') {
      fs.readFile('public/style.css', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
   } else if (req.url === '/html5.jpg' && req.method === 'GET') {
      fs.readFile('public/images/html5.jpg', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
   } 
   else if (req.url === '/javascript.png' && req.method === 'GET') {
    fs.readFile('public/images/javascript.png', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/mongodb.jpeg' && req.method === 'GET') {
    fs.readFile('public/images/mongodb.jpeg', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/nodejs.png' && req.method === 'GET') {
    fs.readFile('public/images/nodejs.png', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/about' && req.method === 'GET') {
    fs.readFile('public/about.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/cantact' && req.method === 'GET') {
    fs.readFile('public/cantact.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/jquery-3.4.1.js' && req.method === 'GET') {
    fs.readFile('public/jquery-3.4.1.js', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/menu.js' && req.method === 'GET') {
    fs.readFile('public/menu.js', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/lesson1' && req.method === 'GET') {
    fs.readFile('public/lesson1.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/lesson2' && req.method === 'GET') {
    fs.readFile('public/lesson2.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/lesson3' && req.method === 'GET') {
    fs.readFile('public/lesson3.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/lesson4' && req.method === 'GET') {
    fs.readFile('public/lesson4.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/lesson5' && req.method === 'GET') {
    fs.readFile('public/lesson5.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
 else if (req.url === '/lesson6' && req.method === 'GET') {
    fs.readFile('public/lesson6.html', (err, data) => {
       if (err) throw err;
       res.write(data);
       res.end();
    })
 } 
    else {
      res.write('Not Found')
      res.end();
   }
}).listen(5030);
console.log("server is listening");