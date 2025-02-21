const express           = require('express');
const clientsController = require('../../controllers/clients');
// const clients           = require('../../controllers/clients.js');
const router            = express.Router();

// Matches with '/api/clients'
router.route("/")
    .post(clientsController.create)
    .get(clientsController.findAll)

//Matches with '/api/clients/id'
router.route('/:id')
    .get(clientsController.read)
    .put(clientsController.update)
    .delete(clientsController.delete)

module.exports = router;