const express = require('express');
const addbookroutes = express.Router();
const BookData = require('../model/bookdata');

function router(nav){
    addbookroutes.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Add Book'
        })
    })
    addbookroutes.post('/add',function(req,res){
        var item = {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.body.image
        }
        
        var book = BookData(item);
        book.save(); //saving to db
        res.redirect('/books');
     
        
    })
    return addbookroutes
}

module.exports = router; 