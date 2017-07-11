import http from 'http' 

http.createServer((req , res) => {
  res.writeHead(200 , {"Content-Type" : "text/html"})
  res.end(" <h1> es6 node </h1>")
}).listen(3000 , () => console.log("running port 3000"))

