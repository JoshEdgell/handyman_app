const express               = require('express');
const proposalsController   = require('../../controllers/proposals.js');
const router                = express.Router();

// Matches with '/api/proposals'
router.route('/')
    .post(proposalsController.create)
    .get(proposalsController.findAll)

// Matches with '/api/proposals/:id'
router.route('/:id')
    .get(proposalsController.read)
    .put(proposalsController.update)
    .delete(proposalsController.delete)


module.exports = router;