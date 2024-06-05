const express = require("express")
const jwt = require("jsonwebtoken")
const secret = require("../config")
const userModel = require("../Model/user")
const validation = require("../zod")
const router = express.Router()
const accountSchema = require("../Model/account")
const verifytoken = require("../middleware")

router.post("/register", async(req,res)=>{
               const info = req.body; 
               try{
                              const payload = validation.parse(info);
                              console.log(payload)
                             
                              const user = await userModel.create(payload)
                              if(user){
                                             const userId = user._id;
                                             await accountSchema.create({
                                                            userId,
                                                            balance:Math.floor(Math.random()*10000)
                                             })
                                             const token  = jwt.sign({userId:user._id} , secret)
                                             if(token){
                                                            res.status(200).json({msg:"registered" , token:token})
                                             }
                                             else{
                                                            res.status(400).json({msg:"not registered"})
                                                            
                                             }
                              }
               }
               catch(err){
                              console.log(err)
                              res.status(400).send("something went wrong duplicate error maybe")
               }
             
})

router.post("/login", async(req,res)=>{
               const payload = req.body; 
               console.log(payload)
               try{
                              
                              const user = await userModel.findOne({username:payload.username,password:payload.password})
                              console.log(user)
                              if(user){
                                             const token  = jwt.sign({userId:user._id},secret)
                                             if(token){
                                                            res.status(200).json({msg:"login success" , token:token})
                                             }
                                             else{
                                                            res.status(400).json({msg:"something went wrong"})
                                                            
                                             }
                              }
                              else{
                                             res.status(400).json({msg:"user does not exists"})
                              }
               }
               catch(err){

                              res.status(400).send("something went wrong ")
               }
             
})


router.post("/update" , verifytoken, async(req,res)=>{
               const data = req.body;
               
               const userId = req.userId.userId;
               console.log(userId.userId);
              let newUser = await userModel.findOneAndUpdate({_id : userId} ,data)
               newUser.save();
               res.send("done")
})

router.get("/search" ,async (req,res)=>{
               const filter = req.query.filter || "";

               const users = await userModel.find({
                              $or: [
                                { firstname: { $regex: filter, $options: "i" } },
                                { lastname: { $regex: filter, $options: "i" } }
                              ]
               });

               res.json({user:users.map(el=>({
                              username : el.username,
                              firstname : el.firstname,
                              lastname: el.lastname,
                              _id:el._id
               }))})
})


// router.get("/bulk")



module.exports = router;