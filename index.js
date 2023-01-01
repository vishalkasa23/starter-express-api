const express = require("express");
const app = express();
const crouse=require("./Crousal/Crouse.json")
const building=require("./WFO/Building.json")
const Holiday=require("./Holiday/MultiHoliday.json")
const city=require("./Holiday/city.json")
const foodlist=require("./Cafeteria/foodlist.json")
const cityfood=require("./Cafeteria/cityfood.json")
const techStacks=require("./Upskill/techStacks.json")
const techStackstype=require("./Upskill/techStackType.json")
const courses=require("./courses")
let port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Hello World")
});

app.get("/crouse",(req,res)=>{
    res.send(crouse)
})
app.get("/building",(req,res)=>{
    res.send(building)
})
app.get("/holiday",(req,res)=>{
    res.send(Holiday)
})
app.get("/city",(req,res)=>{
    res.send(city)
})
app.get("/cityfood",(req,res)=>{
    res.send(cityfood)
})
app.get("/foodlist",(req,res)=>{
    res.send(foodlist)
})
app.get("/user", function(req, res){
    var id = req.query.id 
    res.send(require(`./Profile/${id}.json`))
})
app.get("/techstack",(req,res)=>{
    res.send(techStacks)
})
app.get("/techstacktype",(req,res)=>{
    res.send(techStackstype)
})
app.get("/courses", function(req, res) {
  res.send(courses); //respond with the array of courses
});
app.get("/courses/:id", function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
      return res
          .status(404)
          .send("The course with the given id was not found");
  res.send(course);
});
app.post("/courses", function(req, res) {
  const course = {
      id: courses.length + 1,
      name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put("/courses/:id", function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
      return res
          .status(404)
          .send("The course with the given id was not found");
  course.name = req.body.name;
  res.send(course);
});

app.put("/courses/:id", function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course)
      return res
          .status(404)
          .send("The course with the given id was not found");
  course.name = req.body.name;
  res.send(course);
});
app.listen(port, ()=>{
    console.log(`Example app is listening on port http://localhost:${port}`)
});
