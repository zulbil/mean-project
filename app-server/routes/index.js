const express       = require('express'); 
const router        = express.Router(); 

var userCtrl        = require('./../controllers/users'); 
var postCtrl        = require('./../controllers/posts'); 
var {authenticate}  = require('./../middlewares/authenticate'); 
var {upload}        = require('./../middlewares/upload'); 


//Users Routes 
router.post('/signup', userCtrl.registerUser); 
router.post('/login', userCtrl.loginUser); 

router.get('/profile', authenticate, userCtrl.userProfile); 

// Posts Routes 
router.post('/new/post',authenticate,upload.single('image'), postCtrl.postCreate ); 
router.get('/feed', authenticate, postCtrl.feedList ); 
router.get('/post/:id', authenticate,postCtrl.postById); 
router.delete('/post/remove/:id', authenticate, postCtrl.postDelete ); 
router.patch('/post/edit/:id', authenticate, postCtrl.postUpdate ); 
router.post('/post/like/:id', authenticate, postCtrl.likePost );


router.get('/', (req, res) => {
    res.send('Entry Point ...'); 
})

module.exports = router; 