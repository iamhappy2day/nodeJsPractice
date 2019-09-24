const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    //case 1
    if(req.url === '/') {
       res.end('Hello world!')
    //case 2
    } else if(req.url === '/task2') {
        fs.readFile(
            path.join(__dirname,'txt','notes.txt'),
            'utf-8',
            (err, data) => {
                if (err) {
                    throw new err
                }
                res.end(data)
            }
        )
    //case 3
    } else {
        
        const reqUrl = req.url
        const urlObject = url.parse(reqUrl,true);
        const queryData = (urlObject.query);
        const queryName = queryData.name;
        res.end(`Hello ${queryName}`)
    }
});

server.listen(3000)



