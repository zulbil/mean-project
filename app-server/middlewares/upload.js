const multer        = require('multer');
const MIME_TYPE_MAP = {
    'image/png' : 'png',
    'image/jpeg': 'jpg',
    'image/jpg' : 'jpg'
}; 

// Multer Upload 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error('Invalid mime type'); 
      if ( isValid ) {
          error = null; 
      }
      cb(error, 'app-server/my-uploads'); 
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLowercase().split(' ').join('-'); 
        const ext  = MIME_TYPE_MAP[file.mimetype]; 
        cb(null, name + '-' + Date.now() + '.'+ext); 
    }
}); 

const upload = multer({ storage: storage }).single('image');

module.exports = {
    upload
}