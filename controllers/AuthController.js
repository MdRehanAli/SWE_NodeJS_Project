const path = require('path')
const express = require('express')
const router = express.Router();


router.get("/login", (req, res) => {
    // console.log(req);
    // res.send("Login Page")
    // res.sendFile(path.join(__dirname, "..", "views", "Login.html"))
    console.log("Login Clicked")
    res.render("pages/Login", {pageTitle: "Login", text: "From Login"})
})


router.post("/login", (req, res) => {
    console.log(req.body.email, req.body.password)
})




router.get("/registration", (req, res) => {
    // console.log(req);
    // res.send("Registration Page")
    // res.sendFile(path.join(__dirname, "..", "views", "Registration.html"))
    res.render("pages/Registration", {pageTitle: "Registration", text: "From registration"})
})

module.exports = router;