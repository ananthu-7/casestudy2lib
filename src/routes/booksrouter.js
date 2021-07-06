const express = require("express");
const booksrouter = express.Router();
function router(nav){
    var books = [
        {
            title:'The call of the wild',
            name:'Jack London',
            genre:'Adventure',
            img:'thecall.jpg'
        },
        {
            title:'Beloved',
            name:'Toni Morrison',
            genre:'Classics',
            img:'beloved.jpg'
        },
        {
            title:'Circe',
            name:'Madeline Miller',
            genre:'Fantasy',
            img:'circe.jpg'
        },
        {
            title:'Carrie',
            name:'Stephen King',
            genre:'Horror',
            img:'carrie.jpg'
        },
    ]
    
    
    booksrouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    });
   
    
    booksrouter.get( '/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book: books[id]
        });
    });
    return [booksrouter];
}

module.exports = router;