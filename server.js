const path = require('path')
const express = require('express')
const app = express()

const authController = require("./controllers/AuthController")

app.get("/", (req, res) => {
    // console.log(req)
    // res.send("<h1>Home Page<h1>")
    res.sendFile(path.join(__dirname, "views", "Home.html"))
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
