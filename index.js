import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Node");
});
//This is a Query Params
app.get("/:id",(req,res)=>{
    const {id,role}=req.query;
    res.send({id,role});

});
//This is a Dynamic Params

app.get("/:id", (req, res) => {
    const {id}= req.params;
    res.send(`Your id is ${id}`);
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});