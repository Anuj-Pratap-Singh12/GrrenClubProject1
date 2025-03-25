const express = require('express')
const app = express()
const complainModel = require("./models/complain")
const cookieParser = require('cookie-parser')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.get('/',(req,res)=> {
  res.render("index")
})

app.get('/admin',(req,res)=> {
  res.render("admin")
})

app.post('/create',async (req,res)=> {
  let {email, statement,image} = req.body
  let complain = await complainModel.create({
    email,
    image,
    statement
  })
  res.send(complain)
})

app.listen(3000)