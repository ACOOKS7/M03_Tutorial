const http = require('http');

//can store server (create variable for server)
const server = http.createServer((req,res) => {
    console.log('request made');
});

server.listen(3000, 'localhost',()=>{
    console.log('listening for request on port 3000');
});