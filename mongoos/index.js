const mongoose = require('mongoose');

connection().then((res)=>{
    console.log('connection succesful');
}).catch((err)=>{
    console.log(err);
});


async function connection(){
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
})

const User = mongoose.model('User', userSchema);






