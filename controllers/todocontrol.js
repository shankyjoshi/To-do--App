let data=[{item:"milk"},{item:"second"},{item:"third"}];
var bodyparser=require("body-parser");

var urlencoder=bodyparser.urlencoded({extended:false});

module.exports=(app)=>{

app.get('/todo',(req,res)=>{
 res.render('index',{todos:data});
});

app.post('/todo',urlencoder,(req,res)=>{
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item',(req,res)=>{
  data=data.filter(function(todo){
    return  todo.item.replace(/ /g,'-') !== req.params.item;
  });
  res.json(data);
})

};