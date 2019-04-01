var orm=require("../config/orm.js");
var burger={
    insertOne: function(burgerName){
        orm.insertOne("burgers",{burger_name:burgerName,devoured:0}, function(data){
            // console.log(data);
        });
    },
    selectAll:function(){
        orm.selectAll("burgers",function(data){
            console.table(data);
            return data;
        });
    },
    updateOne:function(idToUpdate,updateObject){
        orm.updateOne("burgers",updateObject,idToUpdate,function(data){
            // console.log(data);
        });
    }
};
module.exports=burger;
// burger.selectAll();
// // burger.updateOne(1,{burger_name:"stupid"});
// burger.selectAll();
