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
      cb(error, 'public/uploads/images'); 
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('-'); 
        const ext  = MIME_TYPE_MAP[file.mimetype]; 
        cb(null, name + '-' + Date.now() + '.'+ext); 
    }
}); 

const upload = multer({ storage: storage, limits: {fieldSize: 2000000, files: 1 } });

module.exports = {
    upload
}