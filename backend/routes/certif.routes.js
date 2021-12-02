const express = require('express') // exporter le model express
const router = express.Router() // acceder au fonctionnalité defini dans le controller
const controllercertif = require('../controller/certification')//appel a la certification dans le modele 
router.post('/', controllercertif.createcertif)//envoyer une requete http de type post
router.get('/', controllercertif.getcertif)//recevoir etc...
router.get('/:nom',controllercertif.getonecertif)
router.put('/',controllercertif.updateOnecertif)
router.delete('/',controllercertif.deleteOnecertif)
module.exports = router
