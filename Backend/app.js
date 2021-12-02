const express=require('express')
const app=express()
//cors permet de faire
//const cors=require('cors')

const bodyParser=require('body-parser')
app.use(bodyParser.json());

const port =process.env.PORT || 3000


const routesoffrealternance=require('./routes/alternance.route')

app.use('/',(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
    next();
})
app.use('/alternance',routesoffrealternance)

app.listen(port,()=>console.log("app listening on port "+port));
