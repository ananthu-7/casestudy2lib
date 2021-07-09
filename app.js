const express = require('express');
const app = express();
const port = process.env.PORT;
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/addbook',name:'Addbook'
    },
    {
        link:'/addauthor',name:'Addauthor'
    },
    {
        link:'/logins',name:'Login'
    },
    {
        link:'/signups',name:'Signup'
    }
];
const booksrouter = require('./src/routes/booksrouter')(nav);
const authorrouter = require('./src/routes/authorrouter')(nav);
const addbookroutes = require('./src/routes/addbookroutes')(nav);
const addauthorroutes = require('./src/routes/addauthorroutes')(nav);
const login = require('./src/routes/login')(nav);
const signup = require('./src/routes/signup')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksrouter);
app.use('/authors',authorrouter);
app.use('/logins',login);
app.use('/signups',signup);
app.use('/addbook',addbookroutes);
app.use('/addauthor',addauthorroutes);

app.get('/',function(req,res){
    res.render("logins",
    {
        nav,
        title:'Library'

    });
});



app.listen(2023);