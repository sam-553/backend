//importing express
const express = require('express');
//import from userrouter&&product_router
const userrouter = require('./routers/userrouter')
const productrouter=require('./routers/product_router')
const cors=require('cors');


//creating an express app

const app = express();

const port = 5000;
//middleware
app.use(cors({
    origin:('http://localhost:3000')
}));
app.use(express.json());
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