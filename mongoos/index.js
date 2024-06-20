const mongoose = require('mongoose');

connection().then((res)=>{
    console.log('connection succesful');
}).catch((err)=>{
    console.log(err);
});


async function connection(){
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}