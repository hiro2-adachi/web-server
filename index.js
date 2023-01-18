const express = require('express')
const path = require("path");
const app = express()

console.log(path.join(__dirname,"public"));

app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,"/public")));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// }) ;


app.post('/quiz', function (req, res) {
    const ans = req.body.answer ;
    if (ans === "2"){
        res.redirect("/correct.html");
    } else {
        res.redirect("/wrong.html");
    }
  });

app.get('/users', function (req, res) {
    res.send({name:"Hiro" , age: 30}) ;
  });

app.get('/aboutttt' , function(req,res){
    res.redirect("about.html");
});

app.listen(3000, function(){
    console.log("Web-server is running!");
});

