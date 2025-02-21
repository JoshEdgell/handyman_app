const invoices       = require('../models/invoice.js');

module.exports = {
    create: function(req,res){
        invoices.create(req.body)
            .then(doc =>{
                res.status(200).json({
                    message: 'invoice created successfully',
                    newInvoice: doc
                })
            })
            .catch(err =>{
                res.status(400).json({
                    error: 'failed to create invoice',
                    details: err.message
                })
            })
    },
    read: function(req,res){
        invoices.find({'invoiceId':req.params.id})
            .then(doc =>{
                res.status(200).json(doc)
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'invoice not found'
                })
            })
    },
    update: function(req,res){
        invoices.findOneAndUpdate({"invoiceId":req.params.id}, req.body, {new:true})
            .then(doc=>{
                res.status(200).json({
                    message: 'invoice updated successfully',
                    updatedInvoice: doc
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'failed to update invoice',
                    details: err.message
                })
            })
    },
    delete: function(req,res){
        invoices.findOneAndDelete({"invoiceId": req.params.id})
            .then(doc=>{
                res.status(200).json({
                    message: 'invoice deleted successfully',
                    deletedInvoice: doc
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'failed to delete invoice',
                    details: err.message
                })
            })
    },
    findAll: function(req,res){
        invoices.find({})
            .then(doc=>{
                res.status(200).json(doc)
            })
            .catch(err=>{
                res.status(400).json({
                    message: 'could not find invoices',
                    details: err.message
                })
            })
    }
}