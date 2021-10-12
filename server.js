const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 8800;

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})
app.listen(port,(e) => {
    if (e) {
        console.log(e);
    }
    console.log('Server is up and running ..');
})