const express = require('express');
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({})
        res.render('blogs/blogs', { blogs: blogs })
    } catch{
        res.redirect('/')
    }

})

router.get('/new', (req, res) => {
    res.render('blogs/new', { blog: new Blog() })
})

router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        posted_on: new Date().toDateString()
    })
    try {
        const newBlog = await blog.save()
        res.redirect('blogs')

    } catch{
        res.render('blogs/new')
        res.render('blogs/new', {
            blog,
            errorMessage: 'Error creating blog'
        })
    }




})
module.exports = router