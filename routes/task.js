const express=require("express")
const router=express.Router()


const{addtask,gettask,singletask,taskupdate,taskdelete}=require("../controller/taskcontroller")



router.post("/addtask",addtask)

router.get("/getAllTask",gettask)

router.get("/getsingletask/:_id",singletask)

router.patch("/update/:id",taskupdate)

router.delete("/delete/:id",taskdelete)

module.exports=router