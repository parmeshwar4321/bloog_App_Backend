
const router=require('express').Router();
const{getUser,addUsers,loginUser,updateUser,deleteUser}=require('../controllers/user')

router.get('/home',getUser)
router.post('/sign',addUsers)
router.post('/log',loginUser)
router.put('/upd',updateUser)
router.delete('/del',deleteUser)

module.exports=router   