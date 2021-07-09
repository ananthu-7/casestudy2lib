const express = require('express');
const authorrouter = express.Router();
const AuthorData = require('../model/authordata');
function router(nav){
    // var authors = [
    //     {
    //         title:'The call of the wild',
    //         name:'Jack London',
    //         genre:'Adventure',
    //         img:'jacklondon.jpg',
    //         des:'John Griffith London was an American novelist, journalist, and social activist. A pioneer of commercial fiction and American magazines, he was one of the first American authors to become an international celebrity and earn a large fortune from writing.'
    //     },
    //     {
    //         title:'Beloved',
    //         name:'Toni Morrison',
    //         genre:'Classics',
    //         img:'tonimorrison.jpg',
    //         des:'Chloe Anthony Wofford Morrison, known as Toni Morrison, was an American novelist, essayist, book editor, and college professor. Her first novel, The Bluest Eye, was published in 1970. The critically acclaimed Song of Solomon brought her national attention and won the National Book Critics Circle Award.'
    //     },
    //     {
    //         title:'Circe',
    //         name:'Madeline Miller',
    //         genre:'Fantasy',
    //         img:'madelinemiller.jpg',
    //         des:'Madeline Miller is an American novelist, author of The Song of Achilles and Circe. Miller spent ten years writing The Song of Achilles while she worked as a Latin and Greek teacher.'
    //     },
    //     {
    //         title:'Carrie',
    //         name:'Stephen King',
    //         genre:'Horror',
    //         img:'stephenking.jpg',
    //         des:'Stephen Edwin King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. His books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books.'
    //     },
    // ]

    authorrouter.get('/',function(req,res){
        AuthorData.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        });    
    });

    authorrouter.get( '/:id',function(req,res){
        const id = req.params.id
        AuthorData.findOne({_id: id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        });    
    });
    return authorrouter;
}

module.exports = router;