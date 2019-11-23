const mongoose      = require('mongoose'); 
const PostSchema    = new mongoose.Schema({
    content: { 
        type: String,
        required: true,
        trim: true,
        minlength: 1 
    }, 
    created: { 
        type: Date,
        default: Date.now 
    },
    updatedAt: { 
        type: String, 
        default: null
    },
    likes : { type: Number, default: 0 },
    likesObj: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Like'
    }],
    image: { type: String, default: null },
    video: { type: String, default:null },
    _creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}); 

const Post = mongoose.model('Post', PostSchema); 

module.exports = { Post }; 