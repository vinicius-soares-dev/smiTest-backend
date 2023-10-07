const express = require("express");
const router = express.Router();
const DemandsController = require("../controllers/index");
const demandsValidation = require("../middlewares/demandsValidation");


// list all demands.
router.get('/api', DemandsController.read);

// create a demand.
router.post('/api', demandsValidation, DemandsController.create);

// delete a demand.
router.delete('/api/:id', DemandsController.delete);

// update a demand.
router.put('/api/:id', DemandsController.update)

module.exports = router;