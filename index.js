import express from "express";
import demoRoutes from "./Routes/Demo.js";
import {getUsers,getUserById,addUser} from "./Model/Something.js";
const app = express();
app.use(express.json());
//this is get request it comes from a model file in which we have a users array and we export getUsers function to all the user from the user array and
// we use res.json(beacause we want to send the data in json format) and we use res.send to send the data in html format.
app.get("/users",(req,res)=>{
    res.json(getUsers());
});

app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=getUserById(id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json("User not found");
    }
});
//This is a post request to add new user to the user and if name and role is not provuded then 
// we send 400 error and then we create new users in which we add the id as length of users array +1 and we give the name and role to the new user and 
// then we push the new users into the users array and then we send the new user to the client with 201 status code.
app.post("/users",(req,res)=>{
    const {name,role}=req.body;
    if(!name ||!role){
        return res.status(400).json("Name and role are required");
    }
    /* const newUser={
        id:users.length+1,
        name,
        role 
    }; */
    const newUser = addUser({ name, role });
    res.status(201).json(newUser);

});
//This is a render request to get all the users and we map the users array and then we join it to a string and 
// then we send it to the client and then we use the id to get the data of that users and 
// use user.find to find the user with that id and if user is found then 
// we send the data of that user and if not found then 
// we send a 404 error and then we use the same id to get the data of that user and send it to the client.
app.get("/users", (req, res) => {
    const items = users.map((u) => `
    <ul>${u.name}</ul>
    <ul>${u.role}</ul>
    `).join("");
   res.send(`
        <h1>Users</h1>
        <ul>${items}</ul> 
    `);
});
app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((u)=>u.id===id);
    if(user){
        res.send(`
            <h1>${user.name}</h1>
            <p>Role: ${user.role}</p>
        `);
    }else{
        res.status(404).send("User not found");
    }
    res.send('<h1>${user.name}</h1><p>Id: ${user.id}</p><p>Role: ${user.role}</p>');
})
app.get("/", (req, res) => {
    res.send("Hello Node");
});
//This is a Query Params
app.get("/:id",(req,res)=>{
    //why we req.query beacuse we are getting the data from the url and we use req.query to get the data from the url.
    const {id,role}=req.params;
    res.send(`Your id is ${id} and your role is ${role}`);

});
// So in Query Params we can send multiple params in the url but in Dynamic Params we can send only one param in the url.
//in Query Params we can send params in the url like this http://localhost:3000/123?role=admin but in 
// Dynamic Params we can send params in the url like this http://localhost:3000/123
//what is the difference between 

//This is a Dynamic Params

app.get("/:id", (req, res) => {
    //
    const {id}= req.params;
    res.send(`Your id is ${id}`);
});
app.use("/demo", demoRoutes);



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});