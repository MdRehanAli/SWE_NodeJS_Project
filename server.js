console.log("Node project is start from here.....")

const express = require('express')
const app = express()

function something() {
    console.log("Called.")

}
// app.get("/", () => {
//     console.log("Called Again.")
// })

app.get("/", (req, res) => {
    // console.log(req)
    res.send("<h1>Home Page<h1>")
})

app.get("/about", (req, res) => {
    // console.log(req)
    res.send("<h1>About Page<h1>")
})

app.get("/contact", (req, res) => {
    // console.log(req)
    res.send("<h1>Contact Page<h1>")
})

app.get("/login", (req, res) => {
    // console.log(req)
    res.send("<h1>Login Page<h1>")
})

app.get("/registration", (req, res) => {
    // console.log(req)
    res.send("<h1>Registration Page<h1>")
})

app.listen(3000)
localhost: 3000
