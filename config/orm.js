var connection=require("./connection.js");
var orm = {

    selectAll: function(tableName,cb){
        connection.query("SELECT * FROM ??",tableName,function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        });
    },
    insertOne: function(tableName,insertObject,cb){
        var queryStr="INSERT INTO ?? SET ?";
        connection.query(queryStr,[tableName,insertObject],function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        });

    },
    updateOne: function(tableName,insertObject,idToSetObject,cb){
        var queryStr="UPDATE ?? SET ? WHERE ?";
        connection.query(queryStr,[tableName,insertObject,idToSetObject],function(err,data){
            if(err){
                console.log(err);
            }
            cb(data);
        });
    }


};
module.exports=orm;