const USER=require('../models/userModel').users
const mongoose=require('mongoose')

const getuserdata=(userId)=>{
   return USER.find({_id:userId},{password:0})

}
module.exports=getuserdata