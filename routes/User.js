const express=require('express')

const AddUser=require('../models/RegisteredUser')

const router=express.Router();


router.get('/',async (req,res)=>{
    try
    {
        const Users=await AddUser.find()
        res.send(Users)
    }
    catch(err)
    {
        res.json({message:err})
    }
})

router.post('/addUser',async (req,res)=>{
    const addUser=new AddUser(
    {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    try
    {
        const userSave=await addUser.save();
        res.send(userSave)
    }
    catch(err)
    {
        res.json({message:err})
    }
})

module.exports=router