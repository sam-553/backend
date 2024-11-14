//importing express
const express = require('express');
//import from userrouter&&product_router
const userrouter = require('./routers/userrouter')
const productrouter=require('./routers/product_router')

//creating an express app

const app = express();

const port = 5000;
//middleware
app.use('/user', userrouter);
app.use('/product',productrouter);
//route or endpoint

app.get('/', (req, res) => {
    res.send('response from express')
})

app.get('/add', (req, res) => {
    res.send('response from add')
})
app.get('/delete', (req, res) => {
    res.send('response from delete')
})
app.get('/getall', (req, res) => {
    res.send('response from gelall')
})
//starting the server
app.listen(port, () => {
    console.log('server started');
})