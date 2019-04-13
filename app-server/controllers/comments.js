var {Post}          = require('./../models/Post'); 
var {Comment}       = require('./../models/Comment'); 

const _             = require('lodash');
var {ObjectID}      = require('mongodb');

// String.prototype.toObjectId = function() {
//     var ObjectId = (require('mongoose').Types.ObjectId);
//     return new ObjectId(this.toString());
// };
  

var createComment = function (req, res ) {
    var id      = req.params.id; 
    var userId  = req.user._id; 
    var content = req.body.content; 
    var com; 

    var newComment = Comment({
        _creator: userId, 
        post: id, 
        content: content
    }); 

    newComment.save().then((comment) => {
        com = comment; 
        return Post.findById(id);
    }).then((post)=> {
        post.comments.push(com);
        res.status(201).send(com); 
    }).catch((error) => {
        res.status(400).send(error); 
    })
}

var updateComment = function (req, res ) {
    var id = req.params.id; 
    //in our body we will take only title and content property
    var body = req.body.content

    if(!ObjectID.isValid(id)) {
        return res.status(404).send({'response': 'ID is invalid'}); 
    }

    body.updatedAt = new Date().getTime(); 
    //update query
    var query = {
        "_id": id, 
        "_creator": req.user._id
    }; 
    Comment.findOneAndUpdate(query, {$set: body}, {new: true}).then((comment) => {
        if(!comment) {
            return res.status(404).send('comment not found');
        }
        res.status(200).send({comment}); 
    }).catch((err) => {
        res.status(400).send(err);
    })
}

var removeComment = function (req, res) {
    var id = req.params.id; 
    var idCom = req.params.idCom; 

    Post.findById(id).then((post) => {
        post.comments.filter((comment) => { 
            return JSON.stringify(comment) !== JSON.stringify(idCom)
        }); 
        return Comment.findById(idCom);
    }).then((comment) => {
        comment.remove();
    }).catch((err) => {
        res.status(400).send(err);
    })
}

module.exports = {
    createComment,
    updateComment,
    removeComment
}