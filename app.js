if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const educationRouter = require('./routes/education');
const blogsRouter = require('./routes/blogs');
const aboutRouter = require('./routes/about')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('connected to mongoose'))

app.use('/', indexRouter)
app.use('/projects', projectsRouter)
app.use('/education', educationRouter)
app.use('/blogs', blogsRouter)
app.use('/about', aboutRouter)

app.listen(process.env.PORT || 3001)