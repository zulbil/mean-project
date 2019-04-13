const mongoose  = require('mongoose'); 
var CommentSchema  = new mongoose.Schema({
    created: { 
        type: Date,
        default: Date.now 
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: {
        type: String, 
        require: true
    }
}); 

var Comment = mongoose.model('Comment', CommentSchema); 

module.exports = { Comment }; 