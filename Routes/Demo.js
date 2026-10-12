import Express from "express";
const router=Express.Router();
router.get("/",(req,res)=>{
    res.send("Hello ji");
})

export default router;