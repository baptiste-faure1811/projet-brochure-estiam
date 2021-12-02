const express =  require('express')

//const mongoose = require('mongoose'),


const app = express();
const port = process.env.PORT || 3000 // definir le port
const routes=require('./root/certif.routes')
app.use('/',(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
    next()
})
app.use('/certification',routes)

app.listen(port,()=>console.log("app listening on port "+port));
