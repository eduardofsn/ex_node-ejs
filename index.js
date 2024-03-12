const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('template1')
})

app.get('/2', (req,res) => {
    res.render('template2')
})

app.get('/3', (req,res) => {
    res.render('template3')
})

app.listen(3000, () => {console.log('App rodando')})