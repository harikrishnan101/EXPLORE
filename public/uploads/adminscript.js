const showImages=()=>{
    const imagesInput=document.getElementById('imageInput')
    const imagePreview=document.getElementById('imagePreview')
    const selectedImages=imagesInput.files
   document.getElementById('imagePreview').innerHTML=null
    for(let i=0; i< selectedImages.length; i++){
        const image=document.createElement('img')
        image.src=URL.createObjectURL(selectedImages[i])
        image.style.Width='50px'
        image.style.margin='3px'
        imagePreview.appendChild(image)
    }
} 