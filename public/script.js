function dosignUp() {
    let formData = {}
    formData.name = document.getElementById("name").value
    formData.email = document.getElementById("email").value
    formData.password = document.getElementById("password").value


    fetch('/register', {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((response) => response.json())
        .then((data) => {
            window.location.href = '/'
            console.log(data.signup);
        })


}
function doLogin() {
    loginData = {}
    loginData.email = document.getElementById('email').value
    loginData.password = document.getElementById('password').value
    fetch('/login', {
        method: "post",
        headers:
        {
            "content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.login) {
                window.location.href = '/home'
            } else {
                document.getElementById("warning").innerHTML = "invalid id or password"
                setTimeout(() => {
                    document.getElementById("warning").innerHTML = ""
                }, 3000)
            }
        })

}

const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
location.assign('/logout')
}
// validate name
function validatename(){
    let name=document.getElementById("name").value
    let regex=/^[a-zA-Z\.'\s']+$/
    // let regex=/^[a-zA-Z]+$   +$ shows unlimited/
    if(regex.test(name)){
      document.getElementById("message1").innerHTML=""
      document.getElementById("message1").style.color=""
    }
    else{
        document.getElementById("message1").innerHTML="enter valid name"
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
      document.getElementById("message2").innerHTML=""
      document.getElementById("message2").style.color=""
    }
    else{
        document.getElementById("message2").innerHTML="enter valid email"
        document.getElementById("message2").style.color="red"



}
}
// validate mob no
function validateno(){
    let num=document.getElementById("number").value
    let regex=/^[0-9]{10}$/
    //   let regex=/^[0-9]{10}+$/  {10} shows the limit obly 10 numbers will be allowed/
    if(regex.test(num)){
      document.getElementById("message3").innerHTML=""
      document.getElementById("message3").style.color=""
    }
    else{
        document.getElementById("message3").innerHTML="enter valid number"
        document.getElementById("message3").style.color="red"

    }
}
function validatePass(){
    let text = document.getElementById('password').value
    let regex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if(regex.test(text)){
        document.getElementById('message4').innerHTML = "";
        return true;
    }else{
        document.getElementById('message4').innerHTML = "password must be alphanumeric and atleast 8 characters";
        document.getElementById('message4').style.color = "red"
        return false
    }
}
   
let validateall=()=>{
    validatename();
    validateno()
    validateemail();
    return true

   }
