var orm=require("../config/orm.js");
var burger={
    insertOne: function(burgerName){
        orm.insertOne("burgers",{burger_name:burgerName,devoured:0}, function(data){
            // console.log(data);
        });
    },
    selectAll:function(){
        var data;
        return orm.selectAll("burgers",function(resp){
            // console.table(data);
            //maybe replace this with an argument CB somehow
            data=resp;
        });
    },
    updateOne:function(idToUpdate,updateObject){
        orm.updateOne("burgers",updateObject,idToUpdate,function(data){
            // console.log(data);
        });
    }
};
module.exports=burger;
console.log(burger.selectAll());
// // burger.updateOne(1,{burger_name:"stupid"});
// burger.selectAll();
