const express=require('express')
const app=express()
// const multer = require("multer");
const path=require('path')
const hbs= require('hbs')
const connectDB=require('./config/dbconfig')
const cookieParser=require('cookie-parser')
require('dotenv').config()
const user=require('./routes/user')
const admin=require('./routes/admin')


connectDB()
app.set('view-engine','hbs')
app.set('views',path.join(__dirname,'pages'))     
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use('/',(req,res,next)=>{
res.set('cache-control','no-store')
next()
})

app.use('/',user)
app.use('/signup',user)
app.use('/admin',admin)


app.listen(5000)




