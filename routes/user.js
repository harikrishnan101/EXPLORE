const express=require('express')

const router=express.Router()
const {doSignup,loginPage,signup,doLogin,homePage,detailedview,logout,createBlog,addBlogData}=require('../controllers/userController')
const userauth=require( '../middleware/userauth')

router.get('/',loginPage);
router.get('/signup',signup);
router.post('/register',doSignup);
router.post('/login',doLogin);
router.get('/home',userauth,homePage);
router.get('/detailedview',userauth,detailedview);
router.get('/logout',logout);
router.get('/createBlog',userauth,createBlog);
router.post('/createBlog',userauth,addBlogData);
module.exports=router