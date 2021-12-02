
const desc_alternance=require('../models/desc_alternance')
//creation
exports.create_descalternance=(req,res)=>{

    const descalternance=new desc_alternance({
       ...req.body
    })
    descalternance.save()
                  .then(()=>console.log('succes creation desc_alternance'))
                  .catch((err)=>res.status(400).json({msg:'erruer de requete'}))
}
//recuperation 
exports.get_descalternance=(req,res)=>{
    desc_alternance.find()
                   .then((descalternance)=>res.status(200).json(descalternance))
                   .catch((err)=>res.status(400).json({error:err}))
}
//mis à jour
exports.update_descalternance=(req,res)=>{
    const nom_image=req.params.name_image
    desc_alternance.updateOne(null, {...req.body})
                    .then(()=>console.log("succes modif url image"))
                    .catch((err)=>console.log("error "+err))
}
//suppression
exports.delete_descalternance=(req,res)=>{
    desc_alternance.deleteOne(null)
                    .then(()=>console.log("succes delte url image"))
                    .catch((err)=>console.log("error "+err))
}