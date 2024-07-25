// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @MERVISMAS12 
// Nilesh080
// /
// NSS-Website
// Public
// Fork your own copy of Nilesh080/NSS-Website
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// NSS-Website/app.js /
// @Nilesh080
// Nilesh080 Update app.js
// Latest commit 812c137 3 days ago
//  History
//  1 contributor
// 123 lines (92 sloc)  4.13 KB

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const collection = require("./mongodb")
const path = require("path")


// app.set("view engine","ejs")


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = express();
app.use(express.json())

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = []; 
// add below
app.use(express.urlencoded({extended:false}))

app.get("/",function(req , res){
  res.render("login")
})

app.get("/signup",function(req,res){
  res.render("signup")

})

app.post("/signup", async (req,res)=>{
  app.get("/login",function(req,res){
    res.render("login")
  
  })
  const data={
    name:req.body.name,
    password:req.body.password,
    role:req.body.role
  }
  const check=await collection.findOne({name:req.body.name})
  await collection.insertMany([data])
  app.get("/post",function(req,res){
    res.render("post");
  })  
  res.render("login");
})


app.post("/login", async (req,res)=>{
  
  try{
    const check=await collection.findOne({name:req.body.name})
    
    if(check.password === req.body.password && check.role === req.body.role){
      // const usr = document.getElementById("username");
      // const role = document.getElementById("role");
      // console.log(usr);
      // console.log(role);
      // res.send(`Welcome, ${check.name} (${check.role})!`);
      
      
      const refereces = {startingContent:homeStartingContent , 
      posts:posts,
      role:check.role
    }
      
      
      res.render("home" , {check } );
        
      app.get("/post",function(req,res){
        res.render("post",{check});
      })  
      app.get("/gallery",function(req,res){
        res.render("gallery",{check});
      })  
      app.get("/admin",function(req,res){
        res.render("admin",{check});
      }) 
      app.get("/file_up",function(req,res){
        res.render("file_up",{check});
      })  
      app.get("/coordinator",function(req,res){
        res.render("coordinator",{check});
      })  
      app.get("/attend",function(req,res){
        res.render("attend",{check});
      })
      app.get("/getfile",function(req,res){
        res.render("getfile",{check});
      })
      app.get("/attendance2",function(req,res){
        res.render("attendance2",{check});
      })
      app.get("/file",function(req,res){
        res.render("file",{check});
      }) 
      app.get("/notice",function(req,res){
        res.render("notice",{check});
      }) 
      app.get("/home",function(req,res){
        res.render("home",{check});
      }) 
    }
    else{
      res.send("Wrong Password or Details")
    }
   
  }
  catch{
    res.send("Wrong Details")
  }

  
})
//add above

// app.get("/" , function(req , res){
//   res.render("home" , {startingContent:homeStartingContent ,
//                       posts:posts});
  
// }); 

app.get("/about" , function(req,res){
  res.render("about" , {aboutContent:aboutContent});
});



app.get("/contact" ,function(req , res){
  
res.render("contact" , {contactContent:contactContent});
  
});

app.get("/compose" , function(req , res){
  res.render("compose");
})

app.post("/compose" , function(req ,res){ 
  res.render("home" , {startingContent:homeStartingContent});
})

app.get("/file" , function(req , res){
  res.render("file");
})

app.post("/file" , function(req ,res){ 
  res.render("home" , {startingContent:homeStartingContent});
})



app.get("/file_down" , function(req , res){
  res.render("file_down");
})
app.post("/file_down" , function(req ,res){ 
  res.render("home" , {startingContent:homeStartingContent});
})





app.listen(3000, function() {
  console.log("Server started on port 3000 and Port connected");
});




// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// NSS-Website/app.js at main · Nilesh080/NSS-Website

