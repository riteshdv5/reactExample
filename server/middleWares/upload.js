const util = require("util");
const multer = require("multer");
const fs = require('fs');
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      fs.mkdir('/resources/',(err)=>{
        cb(null, './resources/');
      });
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
  }).single("file");


  let uploadFileMiddleware = util.promisify(uploadFile);
  
  
  module.exports = uploadFileMiddleware;