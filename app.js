const express = require('express');

var app = express();

app.get('/express', (req, res, next) => {
   // res.send('<h1>Hello Express</h1>');
    res.send({
        name:'yousuf',
        likes:['FaceBook', 'Instagram', 'Whatsapp']
    })
})

app.listen(5000, () => {
    console.log('Server is running 5000 port')
})