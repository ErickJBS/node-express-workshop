const express = require('express')
const App = require('./app')

const port = process.env.port || 3000;

const app = new App(port, [
    require('./routes/notes.router'),
]);

app.listen().then(() => {
    console.log(`App running in port ${port}`)
}).catch((error) => {
    console.log(error)
})
