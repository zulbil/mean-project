const fs            = require('fs');
var {Post}          = require('./../models/Post'); 
var {Like}          = require('./../models/Like');
var {ObjectID}      = require('mongodb');
var {upload}        = require('./../middlewares/upload');

var postCreate = function(req, res) {
    const url       = req.protocol+ '://'+req.get('host'); 
    var imagePath = null;  
    if ( req.file ) {
        imagePath = url+'/images/'+req.file.filename; 
    }
    var newPost = new Post({
        content: req.body.content,
        created: new Date().getTime(),
        media  : imagePath, 
        _creator: req.user._id
    }); 
    newPost.save().then((doc) => {
        res.status(201).send(doc);
    }, (error) => {
        res.status(400).send(error);
    })
    
}

var postListHistory = function(req, res ) {
    Post.find({
        _creator: req.user._id
    }).then((posts) => {
        if(!posts) return res.status(404).send({'response': 'Not found'}); 
        res.status(200).send({posts});
    }, (err) => {
        res.status(400).send(err);
    }); 
}

var feedList = function (req, res) {
    Post.find()
        .sort({ created: -1 })
        .populate('_creator')
        .populate('likesObj')
        .then((posts) => {
            if(!posts) return res.status(404).send({'response': 'Not found'}); 
            var allPosts = [];
            var singlePost;  
            posts.forEach(element => {
                var isLiked = false;
                if (element.likesObj.length) { 
                    element.likesObj.forEach((like) => {
                        if (JSON.stringify(like._creator) === JSON.stringify(req.user._id)) {
                            isLiked = true; 
                        }
                    }) 
                }
                singlePost = {
                    ...element._doc, 
                    isLiked: isLiked
                };
                allPosts.push(singlePost); 
            });
            //console.log(allPosts[0]); 
            res.status(200).send({ posts: allPosts });
        }, (err) => {
            res.status(400).send(err);
        }); 
}

var postById = function(req, res ) {
    var id = req.params.id; 

    if(!ObjectID.isValid(id)) {
        return res.status(400).send({'response': 'ID is invalid'}); 
    }

    Post.findOne({
        "_id": id, 
        "_creator": req.user._id
    }).then((post) => {
        if(!post) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).send({post});
        }
    }, (err) => {
        res.status(400).send(err); 
    })
}

var postDelete = function(req, res ) {
    var id = req.params.id; 

    if(!ObjectID.isValid(id)) {
        return res.status(404).send({'response': 'ID is invalid'}); 
    }

    Post.findOneAndDelete(
        {
            "_id": id, 
            "_creator": req.user._id
        }
    ).then((post) => {
        if(!post) {
            res.status(404).send({'response': 'Post not found'});
        } else {
            var fileName = post.media.split('/').pop();
            fs.unlink(`./public/uploads/images/${fileName}`, (err) => {
                if (err) throw err;
                console.log('Successfully remove from /public/uploads/images');
            })
            res.status(204).send({'response': 'Post was successfully removed'});
        }
    }, (err) => {
        res.status(400).send(err); 
    })
}

var postUpdate = function(req, res) {
    var id = req.params.id; 
    //in our body we will take only title and content property
    var body = _.pick(req.body, ['content']); 

    if(!ObjectID.isValid(id)) {
        return res.status(404).send({'response': 'ID is invalid'}); 
    }

    body.updatedAt = new Date().getTime(); 
    //update query
    var query = {
        "_id": id, 
        "_creator": req.user._id
    }; 
    Post.findOneAndUpdate(query, {$set: body}, {new: true}).then((post) => {
        if(!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).send({post}); 
    }).catch((err) => {
        res.status(400).send(err);
    })
}

var likePost = function (req, res) {
    var id = req.params.id; 

    var newLike = new Like({
        _creator : req.user._id
    }); 

    newLike.save( (err, like) => {
        if (err) {
            throw err; 
        }
        Post.findById(id, (err, post) => {
            if (err) {
                throw err;
            } else {
                post.likesObj.push(like); 
                post.likes ++; 
                post.save((err, postUpdated) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send({ postUpdated });
                    }
                })
            }
        })
    }); 
}

module.exports = {
    postCreate,
    postListHistory,
    feedList,
    postById,
    postDelete,
    postUpdate,
    likePost
}