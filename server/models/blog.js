var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const blogschems = new Schema({
    title: String,
    description: String,
    imageurl: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sinupdata"
    }
})

const blogdata = mongoose.model('blog', blogschems);
module.exports = blogdata;
