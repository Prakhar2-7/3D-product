const { model, Schema } = require('../connection');

const mySchema = new Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

module.exports = model( 'usersCollection', mySchema  );