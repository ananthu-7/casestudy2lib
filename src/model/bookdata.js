const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@projectfiles.alo74.mongodb.net/library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});
var BookData = mongoose.model('bookdata',bookSchema);
module.exports = BookData;