const express=require('express')
const router=express.Router();
const controller=require('../controller/controller')

router.get('/',controller.getAllData)
router.patch('/user/:id',controller.UpdateData)
router.delete('/user/:id',controller.DeleteData)
router.post('/user',controller.CreateUser);
router.get('/sort',controller.Sort);



module.exports=router;
