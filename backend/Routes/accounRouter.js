const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const verifytoken = require("../middleware")
const accountSchema = require("../Model/account")
const userModel = require("../Model/user")

router.get("/balance", verifytoken, async(req,res)=>{
               const userid = req.userId.userId;
               const user = await accountSchema.findOne({userId: userid})
               
             const balance = user.balance; 
  

               res.status(200).json({msg:`your balance is ${balance}`})
})

router.post("/transfer",verifytoken, async(req,res)=>{
               const {to,amount} = req.body;
               const userid = req.userId.userId;
             
              
               try{
                              const sender = await accountSchema.findOne({userId:userid})
                              const prevbal = sender.balance;
                             if(amount > sender.balance){
                                             res.status(400).json({msg:"insufficient balance"})
                             }
                             else{
                              const reciever = await userModel.findOne({username:to})
                              const recId = reciever._id;
                              await accountSchema.updateOne({userId:userid},{$inc :{balance:-amount} })
                              await accountSchema.updateOne({userId:recId},{$inc :{balance:amount} })

                              const updatedsender = await accountSchema.findOne({userId:userid})                      
                              const newBal = updatedsender.balance;
                              
                              res.status(200).json({msg:`transaction happend old balance ${prevbal} new balance ${newBal}`})
                             }
               }
               catch (error) {
                             
                              res.status(500).json({ msg: "Transaction failed", error: error.message });
               }
            
})

module.exports = router