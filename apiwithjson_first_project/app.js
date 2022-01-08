const express=require("express");
const app=express();
const course=require("./data")
const fs = require("fs");
const Course = require("./data");
// const d = require("./course.json")
app.use(express.json())
app.get("/api/course",(req,res)=>{
    res.json(course)
});

app.post("/api/course",(req,res)=>{
    // res.send("student post request")
    // console.log(req.body);
    const user= {
        // "id":course.length+1,
        "id":req.body.id,
        "name": req.body.name,
        "notes":req.body.notes,
        "days_to_complete": req.body.days_to_complete,
        "short_description": req.body.short_description,
        "type": req.body.type,
        "course_type": req.body.course_type,
        "lang_available": [req.body.lang_available]
        }
        
     course.push(user)
    //  console.log(user);
     res.json(user)
     data1=fs.readFileSync("course.json")
     paresedData=JSON.parse(data1)
     paresedData.push(user)
     fs.writeFileSync("course.json",JSON.stringify(paresedData,null,4))

     
});

app.put("/api/course/:id",(req,res)=>{
    const id=req.params.id
    const name= req.body.name
    const notes=req.body.notes
    const days_to_complete=req.body.days_to_complete
    const short_description=req.body.short_description
    const type=req.body.type
    const course_type= req.body.course_type
    const lang_available=[req.body.lang_available]
    const listOfCourses=course.map((course)=>{
        if(course.id==id){
            course["name"]= name,
            course["notes"]=notes,
            course["days_to_complete"]=days_to_complete,
            course["short_description"]=short_description,
            course["type"]=type,
            course["course_type"]=course_type,
            course["lang_available"]=[lang_available]
            return course
            
        }
        else{
            return course
        } 
    })
    fs.writeFileSync("course.json",JSON.stringify())
    fs.writeFileSync("course.json",JSON.stringify(listOfCourses,null,4))
    res.json(listOfCourses)
    
    // console.log(a);

});
app.delete("/api/course/:id", (req,res)=>{
    const id = req.params.id
    res.send(id)
    user = course.filter((x)=>x.id!=id)
    // console.log(user);
    fs.writeFileSync("course.json",JSON.stringify())
    fs.writeFileSync("course.json",JSON.stringify(user,null,4))

})

  

app.listen(3000,()=>{
    console.log("ok");

})


