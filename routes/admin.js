const express=require('express')

const   router=express.Router()
const {UploadPage,createBlog,homepage,deletePost}=require('../controllers/adminController')


router.get('/',homepage)

router.get('/upload',UploadPage)

router.post('/createBlog',createBlog)
router.delete('/deletePost',deletePost)

module.exports=router