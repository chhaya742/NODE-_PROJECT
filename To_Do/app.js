const express=require("express");
const sql=require("mysql")

const app=express();
const bodyparser=require("body-parser");
const { urlencoded } = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"));
var i1=[];
// con=sql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Chhaya'
// });
// con.connect(function(err){
//     if (err) throw err;
//         console.log("concted");
//         con.query("create database todo",function(err,result){
//             if (err) throw err;
//             console.log('create database');
//         });
// });



const knex=require("knex")({
    client:'mysql',
    connection:{
        host:"localhost",
        user:"root",
        password:"Chhaya",
        database:"todo"
    }
});

// knex.schema.createTable("work",(table)=>{
//     table.increments('id')
//     table.string('name')
// }).then(()=>{
//     console.log("created table");
// });



app.get("/",(req,res)=>{
    // res.send(<h1> "hey guys"</h1>)
    res.render("list",{newListItems:i1});

});
app.post("/",(req,res)=>{
    i=req.body.n;
    // console.log(i);
    i1.push(i);
    work=[{name:i}]
    knex('work').insert(work).then(()=>{
        console.log("inserted data");
    
});
    
    // res.render("list",{newListItem:i});
    res.redirect("/");
})
app.listen(3000,"localhost",()=>{
    console.log("ok");
});


