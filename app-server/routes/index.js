const express       = require('express'); 
const router        = express.Router(); 

const userCtrl          = require('./../controllers/users'); 
const postCtrl          = require('./../controllers/posts'); 
const commentCtrl       = require('./../controllers/comments'); 
const {authenticate}    = require('./../middlewares/authenticate'); 
const {upload}          = require('./../middlewares/upload'); 


//Users Routes 
router.post('/signup', userCtrl.registerUser); 
router.post('/login', userCtrl.loginUser); 

router.get('/profile', authenticate, userCtrl.userProfile); 

// Posts Routes 
const uploadPostMedia = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]); 
router.post('/new/post',authenticate,uploadPostMedia, postCtrl.postCreate ); 
router.get('/feed',authenticate, postCtrl.feedList ); 
router.get('/post/:id', authenticate,postCtrl.postById); 
router.delete('/post/remove/:id', authenticate, postCtrl.postDelete ); 
router.patch('/post/edit/:id', authenticate, uploadPostMedia, postCtrl.postUpdate ); 
router.post('/post/like/:id', authenticate, postCtrl.likePost );
router.post('/post/dislike/:id', authenticate, postCtrl.dislikePost );

// Comment Routes 
router.post('/new/comment/:id', authenticate, commentCtrl.createComment);
router.patch('/comment/edit/:id', authenticate, commentCtrl.updateComment); 
router.delete('/post/:id/comment/remove/:idCom', authenticate, commentCtrl.removeComment);


router.get('/', (req, res) => {
    res.send('Entry Point ...'); 
})

module.exports = router; 