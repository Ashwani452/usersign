const express =require("express");
require("./cnn");
const userModel=require("./model");
const app = express();
const port= process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//const personData=[];
app.post("/login",(req,res)=>{
    const user=new userModel(req.body);
  
    user.save().then(()=>{
         res.send(user)
    }).catch((e)=>{
         res.send(e);
    });
    console.log(user);
  
});


app.listen(port,()=>{
console.log("serve running");
});