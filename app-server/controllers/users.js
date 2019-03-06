const _             = require('lodash');
var {User}          = require('./../models/User'); 
var {ObjectID}      = require('mongodb');


var registerUser = function (req, res) {
    var body    = _.pick(req.body, ['firstname', 'lastname','email', 'username', 'password']); 
    var newUser = new User(body); 

    newUser.save().then((newUser, error) => {
        return newUser.generateAuthToken(); 
    }).then((token) => {
        res.header('x-auth', token).send(newUser);
    }).catch((error) => {
        res.status(400).send(error);
    }) 
}

var loginUser = function (req, res) {
    var body    = _.pick(req.body, ['email', 'password']); 

    User.findByCredentials(body.email, body.password).then((user)=> {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        })
    }).catch((error) => {
        res.status(400).send(error);
    }) 
}

var userProfile = function (req, res) {
    res.status(200).send(req.user); 
}

module.exports = {
    registerUser, 
    loginUser,
    userProfile
}