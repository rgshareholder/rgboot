var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = process.env.PORT || 8080;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use(express.static('views'));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(port,function(){
  console.log('Our app is running on http://localhost:' + port);
});
