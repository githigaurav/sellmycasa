import server from "./server.js"









const PORT = process.env.PORT || 3001
server.listen(PORT,()=>{
    console.log("Server status OK")
})