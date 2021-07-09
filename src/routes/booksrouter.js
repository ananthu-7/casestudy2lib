const express = require("express");
const booksrouter = express.Router();
const BookData = require('../model/bookdata');
function router(nav){
    // var books = [
    //     {
    //         title:'The call of the wild',
    //         name:'Jack London',
    //         genre:'Adventure',
    //         img:'thecall.jpg'
    //     },
    //     {
    //         title:'Beloved',
    //         name:'Toni Morrison',
    //         genre:'Classics',
    //         img:'beloved.jpg'
    //     },
    //     {
    //         title:'Circe',
    //         name:'Madeline Miller',
    //         genre:'Fantasy',
    //         img:'circe.jpg'
    //     },
    //     {
    //         title:'Carrie',
    //         name:'Stephen King',
    //         genre:'Horror',
    //         img:'carrie.jpg'
    //     },
    // ]
    
    
    booksrouter.get('/',function(req,res){
        BookData.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        })
        
    });
   
    
    booksrouter.get( '/:id',function(req,res){
        const id = req.params.id
        BookData.findOne({_id: id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });
        });
        
    });
    return booksrouter;
}

module.exports = router;