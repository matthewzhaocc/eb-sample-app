// pull in dependencies
const express = require('express')

const app = express()

const port = process.env.PORT || 8080

// hello world page
app.get('/', (req, res) => {
    res.send("Hello World")
})
// another function
app.get('/hello', (req, res) => {
    res.send("hello")
})
// listen to port xd
app.listen(port, () => {
    console.log(`application listening on ${port}`)
})
