// So in Query Params we can send multiple params in the url but in Dynamic Params we can send only one param in the url.
//in Query Params we can send params in the url like this http://localhost:3000/123?role=admin but in Dynamic Params we can send params in the url like this http://localhost:3000/123
import express from "express";
import demoRoutes from "./Routes/Demo.js";
const app = express();
app.use(express.json());
//This is render of a data from a array of object in a list and we map a link and then join it to a string and 
// then we use id to get the data of that users and 
// use user.find to find the user wuth that id and if user is found then 
// we send the data of that user and if not found then 
// we send a 404 error and then we use the same id to get the data of that user and send it to the client. 
const users=[
    {id:1,name:"Amjad",role:"Admin"},
    {id:2,name:"Sana",role:"User"}
];
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
    const {id,role}=req.query;
    res.send(`Your id is ${id} and your role is ${role}`);

});

//This is a Dynamic Params

app.get("/:id", (req, res) => {
    const {id}= req.params;
    res.send(`Your id is ${id}`);
});
app.use("/demo", demoRoutes);



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});