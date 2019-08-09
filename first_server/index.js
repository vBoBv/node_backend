const http = require('http');
//ES6 has feature like import and stuff
//Node is synchronous while ES6 is aysnchronous so it breaks the sequential rules of node
//So now let use const as normal

const hostname = 'localhost';
const port = 3000;

// => means function(rep, res) {code here}
const server = http.createServer((req, res) => {
   
    const { url } = req;
    console.log(url);

    if(url === '/translations') {
        const translations = {1: 'one', 2: 'two', 3: 'three'};
        res.setHeader('Content-Type', 'application/json')
   
        res.write(JSON.stringify(translations));

        res.end();
    }

   res.end('Welcome to Node!'); 
});

server.listen(port, hostname, () => {
    //console.log(`Server running at ${hostname}:${port}`);
    //Same thing as above
    console.log("Server running at " + hostname + ":" + port);
});