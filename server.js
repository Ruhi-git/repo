const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 5000;
const fs = require('fs')
const blogs = require('./routes/blogs')

//app.use(express.static("public"))
app.use('/blogs',blogs)
// middleware1
app.use((req, res, next)=>{
    console.log(req.headers)
    req.ruhi="My name is Ruhi";
    console.log("Logged");
    next();
 })

 //middleware2
 app.use((req, res, next)=>{
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
     next();
 })

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/', (req, res) => {
    res.send('Hello World');
  });


app.get('/about', (req, res) => {
    res.send("About:" +req.ruhi);
  });
  app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
 
  // etc.