
const User = require("../models/user");
const jwt =require('jsonwebtoken')


// C===== >>> Create
exports.userRegistetion=(req, res)=>{
    let reqBody = req.body;

    User.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else {
            res.status(200).json({status:"success", data:data})}
    })
}

// ==== login ----------
exports.singIn=(req,res)=>{
    let reqBody=req.body
    User.aggregate([
        {$match:reqBody},
        {$project:{_id:0,email:1,name:1,fatherName:1,motherName:1,}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            if(data.length > 0){
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]['email']}
                let token = jwt.sign( Payload,'SecretKey123456789');
                res.status(200).json({status:"success",token:token,data:data[0]})
            }
            else {
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}





