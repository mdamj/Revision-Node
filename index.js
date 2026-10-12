// So in Query Params we can send multiple params in the url but in Dynamic Params we can send only one param in the url.
//in Query Params we can send params in the url like this http://localhost:3000/123?role=admin but in Dynamic Params we can send params in the url like this http://localhost:3000/123
import express from "express";
import demoRoutes from "./Routes/Demo.js";
const app = express();
app.use(express.json());
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