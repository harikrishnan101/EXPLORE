// validate name
function validatename(){
    let name=document.getElementById("name").value
    let regex=/^[a-zA-Z\.'\s']+$/
    // let regex=/^[a-zA-Z]+$   +$ shows unlimited/
    if(regex.test(name)){
      document.getElementById("message").innerHTML="success"
      document.getElementById("message").style.color="green"
    }
    else{
        document.getElementById("message").innerHTML="fail"
        document.getElementById("message").style.color="red"

    }
    

}
// validate mob no
function validateno(){
    let num=document.getElementById("mob").value
    let regex=/^[0-9]{10}$/
    //   let regex=/^[0-9]{10}+$/  {10} shows the limit obly 10 numbers will be allowed/
    if(regex.test(num)){
      document.getElementById("message1").innerHTML="success"
      document.getElementById("message1").style.color="green"
    }
    else{
        document.getElementById("message1").innerHTML="fail"
        document.getElementById("message1").style.color="red"

    }
}
// validate email
    function  validateemail(){
        let num=document.getElementById("email").value
        // name@domainName.com
        let regexx=/^([a-zA-Z0-9\.\-_)]+)@([a-zA-Z]{2,10})\.([A-Za-z]{2,6})$/
        // let regexx=/^([a-zA-Z0-9\.\-_]+)@([a-zA-Z]{2,10})\.([a-zA-Z]{2,6})$/  !!!!  "btw . and - "\" is must OR backslash must in between dot and hyphen"
     
        if(regexx.test(num)){
          document.getElementById("message2").innerHTML="success"
          document.getElementById("message2").style.color="green"
        }
        else{
            document.getElementById("message2").innerHTML="fail"
            document.getElementById("message2").style.color="red"
    
    

}
    }
   let validateall=()=>{
    validatename();
    validateno()
    validateemail();
    return true

   }