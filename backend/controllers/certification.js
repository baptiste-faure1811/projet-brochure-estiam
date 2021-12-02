const { update } = require('../modeles/modele')
const certif = require('../modeles/modele') // importer le dossier modeles


exports.createcertif = (req,res)=>{ // creer un un modele a la bd
    const Certif = new certif({
            _id: "urlimage",
            nom_certification: "franck",

    })
    Certif.save() // enregistrer le modele 
    .then(()=>
    console.log('sucess creation'))
    .catch((err)=>
    console.log(err))
}
  // fonction qui permet de recuperer les certification
exports.getcertif = (res,req)=>{ 
    certif.find()
    .then((certification)=>{
        console.log(certification)
    })
    
    .catch((err)=>
    console.log(err))
}
// recuperer la certification dont le nom sera passé en paramètre
exports.getonecertif =  (res,req)=>{
   // const name = req.params.name
    certif.findOne({nom_certification : 'arsene'})
    .then((certification)=>{
        console.log(certification)
    })
    
    .catch((err)=>
    console.log(err))
}
exports.updateOnecertif = (res,req)=>{ // changer le nom
    // const name = req.params.name
     certif.updateOne({nom_certification : 'franck'}, {nom_certification: 'sidibe'})
     .then(()=>{
         console.log('sucess update')
     })
     
     .catch((err)=>
     console.log(err))
 }

 exports.deleteOnecertif = (res,req)=>{ // changer le nom
    // const name = req.params.name
     certif.deleteOne( {nom_certification: 'sidibe'})
     .then(()=>{
         console.log('sucess delete')
     })
     
     .catch((err)=>
     console.log(err))
 }
 
