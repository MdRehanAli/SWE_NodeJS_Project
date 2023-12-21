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
    res.render("pages/home", { pageTitle: "Home", text: "From Home" });
})

app.get("/about", (req, res) => {
    // console.log(req)
    // res.send("<h1>About Page<h1>")
    // res.sendFile(path.join(__dirname, "views", "About.html"))
    res.render("pages/about", { pageTitle: "About", text: "From About" });
})

app.get("/contact", (req, res) => {
    // console.log(req)
    // res.send("<h1>Contact Page<h1>")
    // res.sendFile(path.join(__dirname, "views", "Contact.html"))
    res.render("pages/contact", { pageTitle: "Contact", text: "From Contact" });
})

app.use("/", authController)

app.get("*", (req, res) => {
    // console.log(req)
    // res.send("<h1>404 Page<h1>")
    // res.sendFile(path.join(__dirname, "views", "404.html"))
    res.render("pages/404", { pageTitle: "Not Found", text: "Invalid Page search" });
})

app.listen(3000)
// localhost: 3000
