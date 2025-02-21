const router            = require("express").Router();
const clientRoutes      = require('./clients.js')
const proposalRoutes    = require('./proposals.js');
const invoiceRoutes     = require('./invoices.js');

//Client routes
router.use('/clients', clientRoutes)

// Proposal Routes
router.use('/proposals', proposalRoutes)

// Invoice Routes
router.use('/invoices', invoiceRoutes)

module.exports = router;
