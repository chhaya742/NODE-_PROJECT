const fs=require("fs")
const course=fs.readFileSync("course.json")
const f=JSON.parse(course)
// console.log(f);
module.exports=f