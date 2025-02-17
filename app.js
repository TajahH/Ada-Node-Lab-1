const fs  = require('fs');
const http = require ('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method)
    const url = req.url

    res.setHeader("Content-Type", "text/html")

    if (url === "/"){
        res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
                res.write('<body>');
                    res.write('<form action="/message" method="POST">'); // GET, POST,
                        res.write('<input type="text" name="message">'); // POST will send all the data within the form elements
                        res.write('<button type="submit">Send</button>');
                    res.write('</form>')
                res.write('</body>');
                return res.end()
}
    if (url === "/create-user" && method === "POST"){
        console.log()
    }
})


server.listen(3000)