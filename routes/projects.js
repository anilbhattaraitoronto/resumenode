const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('projects/projects')
})


router.get('/newProject', (req, res) => {
    res.render('projects/newProject')
})

module.exports = router