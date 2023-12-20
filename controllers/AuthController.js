const path = require('path')
const express = require('express')
const router = express.Router();


router.get("/login", (req, res) => {
    // console.log(req);
    // res.send("Login Page")
    res.sendFile(path.join(__dirname, "..", "views", "Login.html"))
})
router.get("/registration", (req, res) => {
    // console.log(req);
    // res.send("Registration Page")
    res.sendFile(path.join(__dirname, "..", "views", "Registration.html"))
})

module.exports = router;