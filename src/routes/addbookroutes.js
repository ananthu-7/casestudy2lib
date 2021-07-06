const express = require('express');
const addbookroutes = express.Router();
const BookData = require('../model/bookdata');

function router(nav){
    addbookroutes.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'Library'
        })
    })
    addbookroutes.use('/add',function(req,res){
        var item = {
            title : req.query.title,
            author : req.query.author,
            genre : req.query.genre,
            image : req.query.image
        }
        
        var book = BookData(item);
        book.save();
        res.redirect('/books');
        
    })
    return addbookroutes
}

module.exports = router; 