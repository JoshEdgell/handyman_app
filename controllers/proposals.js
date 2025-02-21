const proposals             = require('../models/proposal.js');

module.exports = {
    create: function(req,res){
        proposals.create(req.body)
            .then(doc =>{
                res.status(200).json({
                    message: 'proposal created successfully',
                    newProposal: doc
                })
            })
            .catch(err =>{
                res.status(400).json({
                    error: 'failed to create proposal',
                    details: err.message
                })
            })
    },
    read: function(req,res){
        proposals.find({'proposalId':req.params.id})
            .then(doc =>{
                res.status(200).json(doc)
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'proposal not found'
                })
            })
    },
    update: function(req,res){
        proposals.findOneAndUpdate({"proposalId":req.params.id}, req.body, {new:true})
            .then(doc=>{
                res.status(200).json({
                    message: 'proposal updated successfully',
                    updatedProposal: doc
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'failed to update proposal',
                    details: err.message
                })
            })
    },
    delete: function(req,res){
        proposals.findOneAndDelete({"proposalId": req.params.id})
            .then(doc=>{
                res.status(200).json({
                    message: 'proposal deleted successfully',
                    deletedProposal: doc
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'failed to delete proposal',
                    details: err.message
                })
            })
    },
    findAll: function(req,res){
        proposals.find({})
            .then(doc=>{
                res.status(200).json(doc)
            })
            .catch(err=>{
                res.status(400).json({
                    error: 'could not find proposals',
                    details: err.message 
                })
            })
    }
}