const express = require('express');
const addauthorroutes = express.Router();
const authorData = require('../model/authordata');

function router(nav){
    addauthorroutes.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Add Author'
        })
    })
    addauthorroutes.post('/add',function(req,res){
        var item = {
            title : req.body.title,
            name : req.body.name,
            genre : req.body.genre,
            image : req.body.image,
            des: req.body.des
        }
        
        var author = authorData(item);
        author.save(); //saving to db
        res.redirect('/authors');
     
        
    })
    return addauthorroutes
}

module.exports = router; 