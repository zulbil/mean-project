const multer        = require('multer');

const MIME_TYPE_MAP = {
    'image/png' : 'png',
    'image/jpeg': 'jpg',
    'image/jpg' : 'jpg'
}; 

const VIDEO_TYPES = {
    'video/mp4' : 'mp4', 
    'video/webm': 'webm', 
    'video/ogg' : 'ogg',
    'video/ogv' : 'ogv'
};
// Multer Upload 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const isImage = MIME_TYPE_MAP[file.mimetype];
      const isVideo = VIDEO_TYPES[file.mimetype];
      let error = new Error('Invalid mime type'); 
      if ( isImage || isVideo ) {
          error = null; 
      }
      if (isImage) cb(error, 'public/uploads/images'); 
      if (isVideo) cb(error, 'public/uploads/videos');
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('-'); 
        const ext  = MIME_TYPE_MAP[file.mimetype] ? MIME_TYPE_MAP[file.mimetype] :  VIDEO_TYPES[file.mimetype]; 
        cb(null, name); 
    }
}); 

const upload = multer({ storage: storage, limits: {fieldSize: 2000000, files: 1 } });

module.exports = {
    upload
}