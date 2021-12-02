const mongoose=require('mongoose')
const db=require('../connexion')

const altschema= mongoose.Schema({

    image:{type:String,required:true},
    text:{type:String,required:true}
})
module.exports=mongoose.model('alternance_desc',altschema)