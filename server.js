console.log("Node project is start from here.....")

const express = require('express')
const app = express()

function something() {
    console.log("Called.")

}
app.get("/", () => {
    console.log("Called Again.")
})

app.listen(3000)
localhost:3000
