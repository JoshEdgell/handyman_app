const mongoose          = require('mongoose');
const autoIncrement     = require('mongoose-sequence')(mongoose);

const clientSchema = mongoose.Schema({
    clientId: {type: Number, required: false},
    lastName: {type: String, required: true},
    firstName: {type: String, required: false},
    email: {type: String, required: false},
    phone: {type: Number, required: false},
    address1: {type: String, required: false},
    address2: {type: String, required: false},
    city: {type: String, required: false},
    state: {type: String, required: false, defalut: 'NC'},
    zip: {type: Number, required: false},
    jobs: {type: Array, required: false},
    proposals: {type: Array, required: false},
    invoices: {type: Array, required: false}

})

//Apply auto-increment to the id field
clientSchema.plugin(autoIncrement, {inc_field: 'clientId', start_seq: 503});

const client = mongoose.model('client', clientSchema);

module.exports = client;