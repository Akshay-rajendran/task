const express=require("express")
app=express()
const cors=require("cors")
const taskrouter=require("./routes/task")
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://database:123@cluster0.n3lgztl.mongodb.net/taskdb?retryWrites=true&w=majority")

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./public"))
app.use(express.json())

app.use("/",taskrouter)
 
app.listen(5000,(err,data)=>{
    if(err){
        console.log("server error,check listen");
    }else{
        console.log("server running at port 5000");
    }
})