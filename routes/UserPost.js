const express=require('express')

const post=require('../models/UserContent')

const router=express.Router();

router.get('/',async(req,res)=>{

    try
    {
        const userPost=await post.find()
        res.send(userPost)
    }
    catch(err)
    {
        res.json({message:err})
    }
})

router.post('/Addpost',async(req,res)=>{
    
    const NewPost=new post({
        Post:req.body.Post,
        clap:req.body.clap
    })
    try
    {
        const SavePost=await NewPost.save()
        res.send(SavePost)
    }
    catch(err)
    {
        res.json({message:err})
    }
})

module.exports=router