// const { post } = require("../routes/user")

const showImages=()=>{
   try {
     const imagesInput=document.getElementById('imageInput')
     const imagePreview=document.getElementById('imagePreview')
     const selectedImages=imagesInput.files
    document.getElementById('imagePreview').innerHTML=null
     for(let i=0; i< selectedImages.length; i++){
         const image=document.createElement('img')
         image.src=URL.createObjectURL(selectedImages[i])
         // image.style.Width='50px'
         image.style.height='200px'
         image.style.width='200px'
 
         // image.style.margin='3px'
         imagePreview.appendChild(image)
     }
   } catch (error) {
    
   }
} 

// const deletePost(postId){
//     fetch('/deletePost',{
//         method:'delete',
//         headers:{
//            ' content-Type':'application/json'
//         },
//         body:JSON.stringify({postId: postId})
// })
// }

const deletePost = (postId) => {
   try {
     console.log(postId);
     fetch('/admin/deletePost', {
         method: 'delete',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ postId: postId })
     }).then((res)=>{
 
     })
   } catch (error) {
    
   }
}
