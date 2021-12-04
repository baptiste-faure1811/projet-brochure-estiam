const express = require('express');
const router = express.Router();

const certificationController = require('../controllers/certifications');

router.post('/', certificationController.postCertification);

router.get('/', certificationController.getCertifications);

router.delete('/:deleteID', certificationController.deleteCertification);

router.put('/', certificationController.updateCertification);

module.exports = router;