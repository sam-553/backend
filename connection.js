const mongoose = require('mongoose');


const url="mongodb+srv://samdb:sam553@cluster0.hfmcl.mongodb.net/mydb1?retryWrites=true&w=majority&appName=Cluster0";
//asynchroneous function -return promise
mongoose.connect(url)
.then((result) => {
    console.log('db connected');
    
}).catch((err) => {
    console.log(err);
    
});
module.exports=mongoose
