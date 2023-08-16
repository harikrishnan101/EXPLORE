const { response } = require('express')
const mongoose = require('mongoose')
const user = require('../models/userModel').users
const BLOGS = require('../models/blogSchema')
const jwt = require('jsonwebtoken')
const multer = require('multer')


const loginPage = ((req, res) => {
    if (req.cookies.userJwt) {
        res.redirect('/home')
    }
    else {
        res.render('user/login.hbs')
    }
})
const signup = ((req, res) => {
    res.render('user/signup.hbs')
})

const doSignup = (req, res) => {
    // console.log(req.body);
    user({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }).save().then((res) => {
        res.json({ signup: true })
    })
        .catch(() => {
            res.json({ signup: false })
        })
}
const doLogin = (req, res) => {
    user.find({ email: req.body.email, password: req.body.password }).then((response) => {
        if (response.length > 0) {

            const token = jwt.sign({ userId: response[0].id }, "key", {
                expiresIn: '2d'
            })
            res.cookie('userJwt', token, {
                httpOnly: true,
                samSite: 'lax',
                secure: false,
                maxAge: 24 * 60 * 60 * 1000
            })

            res.status(200).json({ login: true })
        } else {
            res.json({ login: false })
        }
    })
}
const homePage = (req, res) => {
    BLOGS.find().then((response) => {
        res.render('user/home.hbs', { data: response })
    })

}
const detailedview = (req, res) => {
    // console.log(req.query);
    BLOGS.find({ _id: req.query.id }).populate({path:'createdBy',select:['name','email']}).then(response => {
        response[0].createdAt=new Date(response[0].createdAt).getDay()
        // console.log(response);
        res.render('user/detailedview.hbs', { data: response[0] })
    })
}
const createBlog = (req, res) => {
    res.render('user/upload.hbs')
}
const addBlogData =(req,res)=>{
    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "public/uploads/");
        },
        filename: (req, files, cb) => {
            cb(null, Date.now() + "-" + files.originalname)
        }
    })
    const upload = multer({ storage: fileStorage }).array("images", 4)
    upload(req, res, (err) => {
        // console.log(req.files);
        BLOGS({
            heading:req.body.heading,
            category: req.body.category,
            content: req.body.content,
            Image: req.files,
            createdBy:req.query.id
        }).save().then(response => {
            res.redirect('/createBlog')
        })
    })

}
const logout = (req, res) => {
    res.cookie('userJwt', null, {
        httpOnly: true,
        samSite: 'lax',
        secure: false,
        maxAge: 1
    })
    req.cookies.userJwt = null
    res.redirect('/')
}


module.exports = { doSignup, loginPage, signup, doLogin, homePage, detailedview, logout, createBlog, addBlogData }