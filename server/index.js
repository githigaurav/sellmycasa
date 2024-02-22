import server from "./server.js"






server.get("/",(req, res)=>{
    res.status(200).json({message:"Server status : OK"})
})


const PORT = process.env.PORT || 3001
server.listen(PORT,()=>{
    console.log("Server status OK")
})