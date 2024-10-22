var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const signschema = new Schema({
    fristname:String,
    lastname: String,
    email: {
        type: String,
        uniqe: true
    },
    password: String
})

const sinupdata = mongoose.model('signupdata', signschema);
module.exports = sinupdata;