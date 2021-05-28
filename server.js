const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//mongoose database
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sam:sam@cluster0.ulbfy.mongodb.net/sample_weatherdata?retryWrites=true&w=majority", {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error =>console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(process.env.PORT || 3000)

app.use('/', indexRouter)