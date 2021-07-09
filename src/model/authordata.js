const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@projectfiles.alo74.mongodb.net/library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const authorSchema = new Schema({
    title: String,
    name: String,
    genre: String,
    image: String,
    des: String
});
var AuthorData = mongoose.model('authordata',authorSchema);
module.exports = AuthorData;