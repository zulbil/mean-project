const mongoose  = require('mongoose'); 
var LikeSchema  = new mongoose.Schema({
    created: { 
        type: Date,
        default: Date.now 
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}); 

var Like = mongoose.model('Like', LikeSchema); 

module.exports = { Like }; 