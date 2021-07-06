const express = require('express');
const signup = express.Router();
const nav1 = [
    {
        link:'/logins',name:'Login'
    }
];

function router(nav){
    var signups = [
        {
            user:'admin',
            pass:'123'            
        },
        
    ]

    signup.get('/',function(req,res){
        res.render("signups",{
            nav,
            nav1,
            title:'Library',
            signups
        });
    });

    return signup;
}

module.exports = router;