var express=require("express");
var burger=require("../models/burger.js");
module.exports=function(app){
    app.get("/",function(req,res){
        burger.selectAll(function(data){
            // console.log(data);
            res.render("index",{data:data})
        })
        
    });
    app.put("/api/:id",function(req,res){
        console.log(req.body);
        console.log(req.params);
        burger.updateOne(req.params.id,req.body,function(){
            res.status(202).end();
        });
    })
};
