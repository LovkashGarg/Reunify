const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+ "/lost_found.html");
});
app.get("formlost",function(req,res){
    res.sendFile(__dirname+"/formlost.html");
})
app.post("/formlost",function(req,res){
    var name=string(req.body.Name);
    var Mobilenumber=string(req.body.Mobileno);
    var Email=string(req.body.email);
    res.send("Your detail :"+name +" "+Mobilenumber+" "+Email);
})
app.listen(3007,function(){
    console.log("Server has been started at port 3007")
});