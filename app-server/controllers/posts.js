var {Post}          = require('./../models/Todo'); 
var {ObjectID}      = require('mongodb');

var postCreate = function(req, res) {
    var newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        created: new Date().getTime(),
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
    Post.find().then((posts) => {
        if(!posts) return res.status(404).send({'response': 'Not found'}); 
        res.status(200).send({posts});
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

    Post.findOneAndRemove(
        {
            "_id": id, 
            "_creator": req.user._id
        }
    ).then((post) => {
        if(!post) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).send({todo});
        }
    }, (err) => {
        res.status(400).send(err); 
    })
}

var postUpdate = function(req, res) {
    var id = req.params.id; 
    //in our body we will take only title and content property
    var body = _.pick(req.body, ['title', 'content']); 

    if(!ObjectID.isValid(id)) {
        return res.status(404).send({'response': 'ID is invalid'}); 
    }

    body.updatedAt = new Date().getTime(); 
    //update query
    var query = {
        "_id": id, 
        "_creator": req.user._id
    }; 
    Todo.findOneAndUpdate(query, {$set: body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send('Todo not found');
        }
        res.status(200).send({todo}); 
    }).catch((err) => {
        res.status(400).send(err);
    })
}

module.exports = {
    postCreate,
    postListHistory,
    feedList,
    postById,
    postDelete,
    postUpdate
}