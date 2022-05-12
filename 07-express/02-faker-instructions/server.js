const express = require("express"); //import express so we can use express features
const { faker } = require('@faker-js/faker'); //import faker library so we can use it to generate fake random data
const app = express(); //create our app variable which is an instance of express
const port = 8000;



// app.get("/api/hello", (req,res)=>{
//     res.json({msg: "Wazzaaaap Faker API!"});
// })

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.email = faker.internet.email();
    }
}


app.get("/api/users", (req,res)=>{
    //create a user 
    let newUser = new User();
    //respond with json with info about the user
    res.json(newUser)
})



//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));





