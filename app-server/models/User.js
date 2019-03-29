const mongoose      = require('mongoose');
const jwt           = require('jsonwebtoken'); 
const _             = require('lodash'); 
const bcrypt        = require('bcryptjs'); 

require('../../config/database'); 

var UserSchema      = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    }, 
    lastname: {
        type: String, 
        require: true
    }, 
    email: {
        type: String, 
        trim: true,
        unique: true,
        require: true
    },
    username: {
        type: String, 
        require: true
    }, 
    password: {
        type: String, 
        require: true,
        minlength: 6
    },
    profilePicture: { type: String, default: null },
    tokens: [{
        access: {
            type: String, 
            require: true
        },
        token: {
            type: String, 
            require: true
        }
    }]
}); 

//Here, we are overriding the response when we save a user
// For security reason, the client just need to have back a user id and email
UserSchema.methods.toJSON = function () {
    var user        = this; 
    var userObject  = user.toObject();

    return _.pick(userObject, ['_id','firstname','lastname','username','email']); 
}

// Returning a message when a user try to use an existing email
// UserSchema.path('email').validate( function (value) {
//     this.model('User').countDocuments({email: value}, function (err, count) {
//         if (err) {
//             throw new Error(err);
//         }
//         /** If count is greater than zero ==> invalidate */
//         return true;
//     });
// }, 'Email already exists'); 

// We are not using arrow function because arrow function cannot bind this keyword
UserSchema.methods.generateAuthToken = function () {
    var user    = this; 
    var access  = 'auth'; 
    var token   = jwt.sign({_id: user._id.toHexString(), access }, process.env.JWT_SECRET).toString(); 

    user.tokens.push({ access, token }); 

    return user.save().then(() =>{ 
        return token; 
    })
}

UserSchema.methods.removeToken = function (token) {
    var user = this;

    return user.update({
        $pull: {
            tokens: { token }
        }
    })
}

//This function is make a query to find user with the given token
// instance methods
UserSchema.statics.findByToken = function (token) {
    var User = this; 
    var decoded; 
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET); 
    } catch (error) {
        // return new Promise((resolve, reject) => {
        //     reject(); 
        // }); 
        return Promise.reject(); 
    }

    return User.findOne({
        '_id': decoded._id, 
        'tokens.token': token,
        'tokens.access': 'auth'
    }); 
}

//This function is make a query to find user with the given email 
UserSchema.statics.findByCredentials = function (email, password) {
    var User = this; 

    return User.findOne({email}).then((user)=> {
        if(!user) {
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if(res) resolve(user);
                else reject();
            })
        }) 
    })
}

//Middleware : this function will run right before we save a new user into the database
UserSchema.pre('save', function (next) {
    var user = this; 
    var userPassword = user.password; 
    //Check if a pasword has been updated
    // if yes, we'll hash the given password and store it to the database
    // if no, we'll simply call next 
    if(user.isModified('password')) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(userPassword, salt, function(err, hash) {
                user.password = hash; 
                next(); 
            });
        });
    } else {
        next(); 
    }

})




var User = mongoose.model('User', UserSchema); 

module.exports = { User }