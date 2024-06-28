const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hanzira45:3ycvYhBgizz62cL6@cluster0.0xacrxi.mongodb.net/UserData?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connect  succesful");
}).catch((e)=>{
    console.log(e);
});