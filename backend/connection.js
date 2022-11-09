const mongoose = require( 'mongoose');

const databasename = "PRAKHAR"

const url = `mongodb+srv://Prakhar:prakharmi27@cluster0.ynp8bwr.mongodb.net/${databasename}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
})
.catch((err) => {
    console.log(err)
});

module.exports = mongoose;

//  1. Asynchronous - simultaneously
//  2. Synchronous  - one by one 


