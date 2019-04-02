var {User} = require('./../models/User'); 

var authenticate = (req, res, next) => {
    var token = req.headers.authorization.split(" ")[1];

    User.findByToken(token).then((user) => {
        if(!user) {
            return Promise.reject(); 
        }
        req.user    = user;
        req.token   = token; 
        next(); 
    }).catch((error) => {
        res.status(401).send(error); 
    })
}

module.exports = {authenticate};