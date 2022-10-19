const express=require('express');
const app=express();
app.use(express.json());
const port=9000;
const connection = require("./5-config/mongodbConn");
const UserRoute=require("./1-routes/UserRoute")
app.use("/user",UserRoute)
app.get("/",(req,res)=>{
res.send("hello werd")
})
const dbcon = async () => {
    try {
        await connection();
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
};
app.listen(port,()=>{
    console.log(`server work on port no ${port}`);
    dbcon();
})