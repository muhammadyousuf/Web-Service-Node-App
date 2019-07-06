const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
     res.send('<h1>Hello Express</h1>');
   
 })
 
 app.get('/about', (req, res, next) => {
    res.send('About Page');
  
})

app.get('/express', (req, res, next) => {
   // res.send('<h1>Hello Express</h1>');
    res.send({
        name:'yousuf',
        likes:['FaceBook', 'Instagram', 'Whatsapp']
    })
})

app.get('/bad', (req, res, next) => {
    res.send({
      errorMessage:"unable to access this route"        
    })
  
})

app.listen(5000, () => {
    console.log('Server is running 5000 port')
})