import MongoDb from "mongodb";
const MongoClient=MongoDb.MongoClient;
MongoClient.connect('mongodb+srv://excel_platform:SaycSffRR9XpfgEl@cluster0.hsfyudj.mongodb.net/')
.then(result=>{
    console.log("Connected Successful")
})
.catch(err=>{
    console.log(err)
});