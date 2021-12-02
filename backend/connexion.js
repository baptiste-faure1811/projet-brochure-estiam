const mongoose=require('mongoose')

const db=mongoose.connect('mongodb+srv://ESTIAM-brochure:ESTIAM-brochure@cluster0.i47bo.mongodb.net/projet-brochure?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
 }
)
.then(()=>console.log("success connexion"))
.catch((error)=>console.log("erreur: "+error))
module.exports =db;