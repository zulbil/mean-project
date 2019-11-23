var {Post}          = require('./../models/Post'); 
var {Comment}       = require('./../models/Comment'); 

const _             = require('lodash');
var {ObjectID}      = require('mongodb');

// String.prototype.toObjectId = function() {
//     var ObjectId = (require('mongoose').Types.ObjectId);
//     return new ObjectId(this.toString());
// };
  

const createComment = function (req, res ) {
    const id      = req.params.id;  // Post Id
    const userId  = req.user._id; 
    const content = req.body.content; 
    let com; 

   
    const newComment = Comment({
        _creator: userId, 
        post: id, 
        content: content
    }); 

    newComment.save().then((comment) => {
        com = comment; 
        return Post.findById(id);
    }).then((post)=> {
        post.comments.unshift(com);
        return post.save();
    }).then(() => {
        res.status(201).send(com); 
    }).catch((error) => {
        res.status(400).send(error); 
    })
}

const updateComment = function (req, res ) {
    const id = req.params.id; 
    //in our body we will take only title and content property
    const body = _.pick(req.body, ['content']); 

    if(!ObjectID.isValid(id)) {
        return res.status(404).send({'response': 'ID is invalid'}); 
    }

    body.updatedAt = new Date().getTime(); 

    //update query
    const query = {
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

const removeComment = function (req, res) {
    const id = req.params.id; 
    const idCom = req.params.idCom; 

    Post.findById(id).then((post) => {
        post.comments.filter((comment) => { 
            return JSON.stringify(comment._id) !== JSON.stringify(idCom)
        }); 
        return post.save(); 
    }).then(() => {
        return Comment.findByIdAndRemove(idCom);
    }).then((comment) => {
        res.status(204).send(null); 
    }).catch((err) => {
        res.status(400).send(err);
    })
}


module.exports = {
    createComment,
    updateComment,
    removeComment
}