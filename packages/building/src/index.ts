import * as http from 'http';

http.createServer(function (request: any, response: any) {  
    response.writeHead(200, {'Content-Type': 'text/json'})
    response.end('{"version": "1.0.0"}')
}).listen(4000);
