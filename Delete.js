import Express from "express";
const app=Express();
// why we use Express.urlencoded({extended:true}) because we want to get the data from the form and 
// we use extended:true because we want to get the data in the form of object and 
// if we use extended:false then we will get the data in the form of string.
app.use(Express.urlencoded({extended:true}));
const users=[
    {id:1,name:"Amjad",role:"Admin"},
    {id:2,name:"Zehar",role:"Bhoot"},
];
//why we are using in items=users.map because we want to get the data of all items in the users array and 
// then we use join("") because we want to join all the items in the array and then we send it to the client.
app.get("/users",(req,res)=>{
  const items = users
    .map((u) => `<li>${u.name} (${u.role}) <a href="/users/${u.id}/delete">Delete</a></li>`)
    .join("");

  res.send(`<h1>Users</h1><ul>${items}</ul>`);
});
app.get("/users/:id/delete",(req,res)=>{
    const user= users.find((u)=>u.id===Number(req.params.id))
})


