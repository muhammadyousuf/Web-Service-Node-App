const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello Express');
})

app.listen(5000, () => {
    console.log('Server is running 5000 port')
})