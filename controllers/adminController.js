const multer = require('multer')
const BLOGS = require("../models/blogSchema")
const UploadPage = ((req, res) => {
    res.render('admin/upload.hbs')
})
// Blog create*************
const createBlog = (req, res) => {
   try {
     const fileStorage = multer.diskStorage({
         destination: (req, file, cb) => {
             cb(null, "public/uploads/");
         },
         filename: (req, files, cb) => {
             cb(null, Date.now() + "-" + files.originalname)
         }
     })
   } catch (error) {
    
   }
    const upload = multer({ storage: fileStorage }).array("images", 4)
  try {
      upload(req, res, (err) => {
          console.log(req.files);
          BLOGS({
              heading: req.body.heading,
              category: req.body.category,
              content: req.body.content,
              Image: req.files,
          }).save().then(response => {
              res.redirect('/admin/upload')
          })
      })
  } catch (error) {
    
  }
}
// homepage*******************

const homepage = (req, res) => {
    BLOGS.find().then((response) => {
        res.render('admin/adminhome.hbs', { data: response })
    })

}
// delete_post***************
const deletePost = (req, res) => {
   try {
     BLOGS.findOne({ _id: req.body.postId }).then(selectedFileData => {
         BLOGS.deleteOne({ _id: req.body.postId }).then((resp) => {
             for (let i = 0; i < selectedFileData.image; i++) {
                 const filepath = path.join(__dirname, '..', 'public/upload', selectedFileData.image[i].filename)
                 fs.unlink(filepath, (err))
 
             }
         })
 
     })
   } catch (error) {
    
   }
}

module.exports = { UploadPage, createBlog, homepage, deletePost }