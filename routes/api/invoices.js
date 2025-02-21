const express               = require('express');
const invoicesController    = require('../../controllers/invoices.js');
const router                = express.Router();

// Matches with '/api/clients'
router.route("/")
    .post(invoicesController.create)
    .get(invoicesController.findAll)

//Matches with '/api/clients/id'
router.route('/:id')
    .get(invoicesController.read)
    .put(invoicesController.update)
    .delete(invoicesController.delete)

module.exports = router;