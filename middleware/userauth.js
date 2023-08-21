// const { response } = require('express')
const jwt=require('jsonwebtoken')
const getuserdata=require('../helpers/helper')  
const userAuthentiaction=(req,res,next)=>{
    if(req?.cookies?.userJwt){
       
const isloggedin=jwt.verify(req.cookies.userJwt,'key')
if(isloggedin){
   const user= parseJwt(req.cookies.userJwt)
//    console.log(user);
  getuserdata(user?.userId).then((response)=>{
    res.locals.userDetails=response[0]
    // console.log( res.locals.userDetails," res.locals.userDetails");
    next()
  })


}else{
    res.cookie('userJwt', null, {
        httpOnly: true,
        samSite: 'lax',
        secure: false,
        maxAge: 24 * 60 *60* 1000
    })
    res.redirect('/')
}
    }else{
        res.redirect('/')
    }
}


module.exports=userAuthentiaction

function parseJwt (token) {
   try {
     var base64Url = token.split('.')[1];
     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
     var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
     }).join(''));
 
     return JSON.parse(jsonPayload);
   } catch (error) {
    
   }
}