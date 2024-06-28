const mongoose=require("mongoose");

const userSechema= mongoose.Schema({
    pname:{
        type:String
    },
    pphone:{
        type:String
    },
    pAge:{
        type:String
    }
});

const userModel= mongoose.model("User",userSechema);

module.exports=userModel;