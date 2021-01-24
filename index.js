// pull in dependencies
const express = require('express')

const app = express()

const port = process.env.PORT || 8080

// hello world page
app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`application listening on ${port}`)
})
