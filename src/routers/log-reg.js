const express=require('express');
const router = require('express').Router();
const cors=require('cors');
router.use(express.json());
router.use(cors());

const User=require('../models/registerSchema');

//login user....
router.post("/login",(req,res)=>{
    const {email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password=== user.password){
                res.send({
                    message:"login successfull",
                    user:user
                })
            }
            else{
                res.send({message: "password wrong"})
            }
            
        }else{
            res.send({message:"user not register"})
        }
    })
})


//register user...
router.post("/register", (req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"})
        }else{
            const user= new User({
                email:email,
                password:password
            })
            user.save(
                err=>{
                    if(err){
                        res.send(err);
                    }else{
                        res.send({message: "Successfully Registered"})
                    }
                }
            )
        }
    })
    
})

// router.get("/register",async(req,res)=>{
//     try{
//         const data= await User.find();
//         res.status(200).json({
//             status:"success",
//             user:data
//         })
//     }catch(e){
//         res.status(400).json({
//             status:"failed",
//             message:e.message
//         })
//     }
// })

module.exports=router