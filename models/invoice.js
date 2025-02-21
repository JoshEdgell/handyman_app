const mongoose          = require('mongoose');
const autoIncrement     = require('mongoose-sequence')(mongoose);

const currentDate = new Date();
const payByDate = new Date(currentDate);
payByDate.setDate(currentDate.getDate() + 30);


const invoiceSchema = mongoose.Schema({
    invoiceId: {type: Number},
    issueDate: {type: Date, default: Date.now},
    dueDate: {type: Date, default: payByDate},
    lineItems: {type: Array},
    subtotal: {type: Number},
    outstandingBalance: {type: Boolean, default: true},
    payments: {type: Array}
})

invoiceSchema.plugin(autoIncrement, {inc_field: 'invoiceId', start_seq: 500});

const invoice = mongoose.model('invoice', invoiceSchema);

module.exports = invoice;