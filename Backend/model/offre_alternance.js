const { ObjectId } = require('bson');
const mongoose=require('mongoose')
const db=require('../connexion')

const altschema= mongoose.Schema({

    //_id: {type: ObjectId, required: true},
    nom_entreprise:{type: String,required:true},
    desc_offre:{type: String,required:true },
    poste:{type: String,required:true},
    profil_recherche:{type: String,required:true },
    lien_cand:{type: String, required:true }
    
})
module.exports=mongoose.model('alternance_offre',altschema)