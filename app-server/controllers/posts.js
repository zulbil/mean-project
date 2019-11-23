const fs            = require('fs');
const _             = require('lodash');

var {Post}          = require('./../models/Post'); 
var {Like}          = require('./../models/Like');
var {Comment}       = require('./../models/Comment'); 
var {ObjectID}      = require('mongodb');
var {upload}        = require('./../middlewares/upload');

var postCreate = function(req, res) {
    const url       = req.protocol+ '://'+req.get('host'); 
    let imagePath   = null;  
    let videoPath   = null;
    
    imagePath = (req.files && req.files['image']) && url+'/images/'+req.files['image'][0].filename;
    videoPath = (req.files && req.files['video']) && url+'/videos/'+req.files['video'][0].filename; 
    const newPost = new Post({
        content: req.body.content,
        created: new Date().getTime(),
        image  : imagePath, 
        video : videoPath,
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
        .populate('comments')
        .then((posts) => {
            if(!posts) return res.status(404).send({'response': 'Not found'}); 
            var allPosts = [];
            var userLikesId = [];
            var singlePost;  
            posts.forEach(element => {
                var isLiked = false;
                if (element.likesObj.length) { 
                    element.likesObj.forEach((like) => {
                        if (JSON.stringify(like._creator) === JSON.stringify(req.user._id)) {
                            isLiked = true; 
                        }
                        userLikesId.push(like._creator); 
                    }) 
                }
                singlePost = {
                    ...element._doc, 
                    isLiked: isLiked,
                    userLikesId : userLikesId
                };
                allPosts.push(singlePost); 
            });
            //console.log(allPosts); 
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
        // Remove image or video File
        let path; 
        let fileName;
        if (post.image) {
            fileName = post.image.split('/').pop();
            path = `./public/uploads/images/${fileName}`;
        }
        if (post.video) {
            fileName = post.video.split('/').pop();
            path = `./public/uploads/videos/${fileName}`;
        }
        if (post.image || post.video) {
            fs.unlink(path, (err) => {
                if (err) throw err;
                console.log('Successfully remove');
            })
        }
        return Comment.findOneAndRemove({"post": id }); 
    }).then(()=> {
        return Like.findOneAndRemove({"post": id }); 
    }).then(() => {
        res.status(204).send({'response': 'Post was successfully removed'});
    }).catch((error) => {
        res.status(400).send(error); 
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
        _creator : req.user._id,
        post: id
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

var dislikePost = function (req, res) {
    var id = req.params.id; 
    var userId = req.user._id; 
    var idLike;

    Like.findOne({'_creator': userId, 'post': id }).then((like) => {
        like.remove(); 
        idLike = like._id; 
        return Post.findById(id);
    }).then((post) => {
        if ( !post.likesObj.length ) {
            return Promise.reject(); 
        }
        var likePost = post.likesObj.filter((item) => JSON.stringify(item) !== JSON.stringify(idLike)); 
        post.likesObj = likePost;
        post.likes--;
        return post.save();
    }).then((newPost) => {
        console.log(newPost);
        res.status(200).send(newPost);
    }).catch((error) => {
        res.status(400).send(error); 
    })
}


module.exports = {
    postCreate,
    postListHistory,
    feedList,
    postById,
    postDelete,
    postUpdate,
    likePost,
    dislikePost
}