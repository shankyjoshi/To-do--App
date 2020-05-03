var express=require('express');
var todo=require('./controllers/todocontrol');
var app=express();

//set template engine
app.set("view engine",'ejs');

//static files
app.use(express.static('./public'));

//todo controller
todo(app);

app.get('/user/:id',(req,res)=>{
    res.sendFile(__dirname+'//index.html');
})


//listen to port 
app.listen(3000);

console.log("Listening from port 3000");
