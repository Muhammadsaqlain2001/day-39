const mongoose = require('mongoose');

connection().then((res) => {
    console.log('connection succesful');
}).catch((err) => {
    console.log(err);
});


async function connection() {
    mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number
    }

});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: 'web programing',
    price: '523'
})
book1.save().then((res) => { console.log(res) }).catch((err) => { console.log(err) })
