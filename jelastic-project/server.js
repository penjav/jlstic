/**
 * http://usejsdoc.org/
 */
var express = require("express");
var path = require("path");

var app = express();

app.set("port",process.env.PORT || 3000);
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"view"));
app.use(express.static(path.resolve(__dirname,"view")));

app.get("/",function(req,res){
	res.render("index");
}).listen(app.get("port"),function(){
	console.log("Server started on "+ app.get("port"));
});