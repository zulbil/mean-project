const _             = require('lodash');
var {User}          = require('./../models/User'); 
var {ObjectID}      = require('mongodb');


var registerUser = function (req, res) {
    var body    = _.pick(req.body, ['firstname', 'lastname','email', 'username', 'password']); 
    var newUser = new User(body); 

    newUser.save().then((newUser, error) => {
        return newUser.generateAuthToken(); 
    }).then((token) => {
        res.header('x-auth', token).send({'success': true, 'data': newUser, 'token': token });
    }).catch((error) => {
        res.status(400).send({'success': false, 'data': error });
    }) 
}

var loginUser = function (req, res) {
    var body    = _.pick(req.body, ['email', 'password']); 

    User.findByCredentials(body.email, body.password).then((user)=> {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send({'success': true, 'data':user, 'token': token });
        })
    }).catch((error) => {
        res.status(400).send({'success': false, 'data': error});
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