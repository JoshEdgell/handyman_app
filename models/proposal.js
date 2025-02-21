const mongoose          = require('mongoose');
const autoIncrement     = require('mongoose-sequence')(mongoose);

const proposalSchema = mongoose.Schema({
    proposalId: {type: Number},
    createdAt: {type: Date, default: Date.now},
    scope: {type: Array},
    timeline: {type: String},
    lineItems: {type: Array},
    subtotal: {type: Number} 

})

//Apply auto-increment to the id field
proposalSchema.plugin(autoIncrement, {inc_field: 'proposalId', start_seq: 500});

const proposal = mongoose.model('proposal', proposalSchema);

module.exports = proposal;