const express = require('express');
const login = express.Router();
function router(nav){
    var logins = [
        {
            user:'admin',
            pass:'123'            
        },
        
    ]

    login.get('/',function(req,res){
        res.render("logins",{
            nav,
            title:'Library',
            logins
        });
    });

    
    return login;
}

module.exports = router;