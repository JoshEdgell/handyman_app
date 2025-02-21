const clients       = require('../models/client.js');

module.exports = {
    create: function(req,res){
        clients.create(req.body)
            .then(doc =>{
                res.status(200).json({
                    message: 'client created successfully',
                    newClient: doc
                })
            })
            .catch(err =>{
                res.status(400).json({
                    error: 'failed to create client',
                    details: err.message
                })
            })
    },
    read: function(req,res){
        clients.find({'clientId':req.params.id})
            .then(doc =>{
                res.status(200).json(doc)
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'client not found'
                })
            })
    },
    update: function(req,res){
        clients.findOneAndUpdate({"clientId":req.params.id}, req.body, {new:true})
            .then(doc=>{
                res.status(200).json({
                    message: 'client updated successfully',
                    updatedClient: doc
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'failed to update client',
                    details: err.message
                })
            })
    },
    delete: function(req,res){
        clients.findOneAndDelete({"clientId": req.params.id})
            .then(doc=>{
                res.status(200).json({
                    message: 'client deleted successfully',
                    deletedClient: doc
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'failed to delete client',
                    details: err.message
                })
            })
    },
    findAll: function(req,res){
        clients.find({})
            .then(doc=>{
                res.status(200).json(doc)
            })
            .catch(err=>{
                res.status(400).json({
                    message: 'could not find clients',
                    details: err.message
                })
            })
    }
}