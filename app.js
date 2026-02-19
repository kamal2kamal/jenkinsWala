const http = require('http');
        const server = http.createServer((req, res) => {
          res.end('Hello! I am now listening to the whole world on 0.0.0.0 with port 8084');
        });
        // We MUST use '0.0.0.0' so Windows can see it!
        server.listen(3000, '0.0.0.0', () => {
            console.log('Server running on port 3000');
        });
