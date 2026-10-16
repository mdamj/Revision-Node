import Express from "express";
const app=Express();
app.use(Express.urlencoded({extended:true}));
const users=[
    {id:1,name:"Amjad",role:"Admin"},
    {id:2,name:"Zehar",role:"Bhoot"},
];
app.get("/users",(req,res)=>{

// List page: each user links to edit page.
  const items = users
    .map((u) => `<li>${u.name} (${u.role}) <a href="/users/${u.id}/edit">Edit</a></li>`)
    .join("");

  res.send(`<h1>Users</h1><ul>${items}</ul>`);
});

// 1. Show the edit form, pre-filled with current data
app.get("/users/:id/edit", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).send("<h1>User not found</h1>");

  res.send(`
    <h1>Edit User</h1>
    <form method="POST" action="/users/${user.id}/edit">
      <input name="name" value="${user.name}" />
      <input name="role" value="${user.role}" />
      <button type="submit">Save</button>
    </form>
    <a href="/users">Cancel</a>
  `);
});
app.get("/users/:id/delete",(req,res)=>{
    const user=users.find((u)=>u.id===Number(req.params.id));
    res.send(`
        <h1>Delete</h2>
        <input name="name" value="${user.name}"/>
        <input name="role" value="${user.role}"/>
        <button type="submit">Save</button>
        `)
})

// 2. Save the changes
app.post("/users/:id/edit", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).send("<h1>User not found</h1>");

  const { name, role } = req.body;
  user.name = name;
  user.role = role;

  res.redirect("/users"); // go back to the list
});


app.listen(3000, () => console.log("Server running on port 3000"));
//This is page of edit user and we use get request to get the data of that user and then we use post request to update the data of that user and then we use redirect to go back to the list of users.
//1. we use the array of users 