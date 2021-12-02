const express=require('express')
const router=express.Router()
const offreAlternancecontrolleur=require('../controlleur/offres_alternance')
const descalternance=require('../controlleur/desc_alternance')

router.post('/offres',offreAlternancecontrolleur.createoffrealternances)
router.post('/descalternance',descalternance.create_descalternance)
router.get('/offres',offreAlternancecontrolleur.getoffreallternances)
router.get('/descalternance',descalternance.get_descalternance)
router.put('/offres/:nom_recherche',offreAlternancecontrolleur.updateoffrealternance)
router.put('/descalternance/:name_image',descalternance.update_descalternance)
router.delete('/offres/:nom_supprimer',offreAlternancecontrolleur.deleteOneOffrealternance)
router.delete('/descalternance',descalternance.delete_descalternance)
module.exports=router;