/**
 * http://usejsdoc.org/
 */
var express = require("express");

var app = express();

app.set("port",process.env.PORT || 3000);

app.get("/",function(req,res){
	res.send("Hello world! welcome to node. success!");
}).listen(app.get("port"),function(){
	console.log("Server started on "+ app.get("port"));
});