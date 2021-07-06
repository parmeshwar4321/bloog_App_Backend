const {userPost,addPost,updatePost,deletePost}= require('../controllers/userpost')
const router=require('express').Router();

router.get('/userPost', userPost)

router.post('/addPost',addPost)

router.put('/updPost/:id',updatePost)

router.delete('/delPost/:id',deletePost)

module.exports=router