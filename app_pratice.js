const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use('/static', express.static('static'))

app.set('view engine', 'pug')

app.set('views',path.join(__dirname,'views'))

//our pug 
app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/",(req,res)=>{
    res.send("hi saurabh")
})

app.listen(port,()=>{
    console.log(`the application is running at ${port}`);
})