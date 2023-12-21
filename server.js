const path = require('path')
const express = require('express')
const ejs = require('ejs')
const app = express()

// import the controller
const authController = require("./controllers/AuthController")

//Templating Engine
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    // console.log(req)
    // res.send("<h1>Home Page<h1>")
    // res.sendFile(path.join(__dirname, "views", "Home.html"))
    res.render('Demo.ejs')
})

app.get("/about", (req, res) => {
    // console.log(req)
    // res.send("<h1>About Page<h1>")
    res.sendFile(path.join(__dirname, "views", "About.html"))
})

app.get("/contact", (req, res) => {
    // console.log(req)
    // res.send("<h1>Contact Page<h1>")
    res.sendFile(path.join(__dirname, "views", "Contact.html"))
})

app.use("/", authController)

app.get("*", (req, res) => {
    // console.log(req)
    // res.send("<h1>404 Page<h1>")
    res.sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000)
// localhost: 3000
