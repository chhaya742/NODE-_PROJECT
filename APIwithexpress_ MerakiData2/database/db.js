const mysql=require("mysql")
const fs = require("fs")
const read = fs.readFileSync("data.json")
const Data = JSON.parse(read)
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Chhaya@1234',
        database: 'MerakiData'
    }
})

knex.schema.createTable('CourseData1', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('logo')
    table.string('notes')
    table.integer('days_to_complete')
    table.string('short_description ')
    table.string('type')
    table.string('course_type')
    table.string('lang_available')
}).then((data) => {
    console.log("CourseData Table Created");
  })
  .catch((err) => {
    console.log("CourseData Table Already Exist!!");
  });

  const dbConn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Chhaya@1234",
    database:"MerakiData"
})

  dbConn.connect(function(err) {
        var values=[]
        for (let i = 0; i < Data.length; i++) {
            // console.log(Data);
            values.push([Data[i].id, Data[i].name, Data[i].logo, Data[i].notes, Data[i].days_to_complete, Data[i].short_description, Data[i].type,Data[i].course_type, Data[i].lang_available.toString()])
        } 
        // console.log(values);
        var sql=`INSERT INTO CourseData1  VALUES?`
        dbConn.query(sql,[values],(err,result)=>{
            if (err){
                console.log("data already insert");
            }
            else{
                console.log('data inseted succesfully.');

            }
            
        })
    }) 




    
   
module.exports=knex