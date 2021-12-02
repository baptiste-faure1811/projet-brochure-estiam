
const offre_alternance=require('../model/offre_alternance')

//Alimentation de la bdd
 exports.createoffrealternances=(req,res)=>{
       
     const Alternance=new offre_alternance({

         ...req.body
        
     })
     Alternance.save()
               .then(()=>console.log("succes creation offre alternance"))
               .catch((err)=>console.log("err "+err))
    
}
//recuperation toutes les offres saved in our bdd
exports.getoffreallternances=(req,res)=>{
   offre_alternance.find()
   .then((offreAlternance)=>{
         res.status(200).json(offreAlternance)
   })
   .catch((err)=>{
      res.status(400).json({errur: err})
   })
}
//modifcation des données
exports.updateoffrealternance=(req,res)=> {
   const nom= req.params.nom_recherche; 
   
   
   offre_alternance.updateOne({nom_entreprise: nom}, {...req.body})
                               .then(()=>console.log("succes modif offre alternance"))
                               .catch((err)=>console.log("error "+err))
}

//suppression des données
exports.deleteOneOffrealternance=(req,res)=>{
   const nom=req.params.nom_supprimer;
   offre_alternance.deleteOne({nom_entreprise:nom})
                   .then(()=>console.log("succes delte offre alternance"))
                   .catch((err)=>console.log("error "+err))
}