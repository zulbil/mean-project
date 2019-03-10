const express       = require('express'); 
const router        = express.Router(); 

var userCtrl        = require('./../controllers/users'); 
var {authenticate}  = require('./../middlewares/authenticate'); 

//Users Routes 
router.post('/signup', userCtrl.registerUser); 
router.post('/login', userCtrl.loginUser); 

router.get('/profile', authenticate, userCtrl.userProfile); 


router.get('/', (req, res) => {
    res.send('Entry Point ...'); 
})

module.exports = router; 