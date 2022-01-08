const knex= require("../database/db")

GetCourse=(req, res) => {
  knex
    .select("*")
    .from("CourseData1")
  .then((data) => {
    if(data.length==0){
      console.log(data);
      res.json({ "success": true,
      "status": 200,
      "user":"no data" });
    }
    else{
    console.log(data);
    res.json({ "success": true,
    "status": 200,
    "user": data });}
  })
  .catch((er) => {
    console.log(er);
    res.json({ message: er });
  });

}

CoursefindbyId=(req, res) => {
  knex
    .select("*")
    .from("CourseData1").where("id",req.params.id)
    .then((data) => {
      if(data.length==0){
        console.log({"user":"no such as course"});
        res.json({ "success": true,
        "status": 200,
        "user":"no such as course" });
      }
      else{
      console.log(data);
      res.json({ "success": true,
      "status": 200,
      "user": data });}
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: er });
    });
};

postCourse=(req, res) => {
  if(!req.body.name || 
    !req.body.logo || 
    !req.body.notes ||
    !req.body.days_to_complete ||
    !req.body.short_description || 
    !req.body.type || 
    !req.body.course_type ||
    !req.body.lang_available){
    res.send({
      "success": false,
      "status": 400,
      "message": "Got error while saving",
      })
      console.log({
        "success": false,
        "status": 400,
        "message": "Got error while saving",
        });
      return""
  }
  const userdata = {
    id:req.body.id,
    name:req.body.name,
    logo:req.body.logo,
    notes:req.body.notes,
    days_to_complete:req.body.days_to_complete,
    short_description:req.body.short_description,
    type:req.body.type,
    course_type:req.body.course_type,
    lang_available:req.body.lang_available
  };
  knex("CourseData1")
    .insert(userdata)
    .then((data) => {
      res.send({ success: `${ data} registered successfully!` });
    })
    .catch((err) => {
      if (res.errorno=1062){
      res.send({message:"this email already exist"})}
      else{
      console.log(err);
      res.send({ message: err });}
    });
}

// update


UpdateCourse=(req, res) => {
  knex('CourseData1').
      where('id', '=',req.query.id)
      .update({
        id:req.body.id,
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:req.body.lang_available
      })
      .then((data) => {
          console.log(data);
          res.send(`updated successfully`)
      })
      .catch((er) => {
          console.log(er);
          res.json({ "message": er })
      });
}

// delete
DeletCourse=(req, res)=> {
  knex('CourseData1')
      .where('id', req.query.id)
      .del()
      .then((data) => {
          console.log(data);
          res.send("deleted successfully")
      })
      .catch((er) => {
          console.log(er);
          res.json({ "message": er })
      });
}





module.exports={GetCourse,CoursefindbyId,postCourse,UpdateCourse,DeletCourse}