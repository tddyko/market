const multer = require("multer");
const fs = require("fs");
fs.readdir("./public/images", (err, data) => {
  if (err) {
    fs.mkdirSync("./public/images");
  }
});
module.exports = function (filepath) {
  fs.readdir(filepath, (err, data) => {
    if (err)
     try{
        fs.mkdirSync(filepath);
     }catch{}
  });
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, filepath);
    },
    filename: function (req, file, cb) {
      let newFileName =  new Date().valueOf() + "_" + file.originalname
      cb(null, newFileName) ;
    },
  });
  return (upload = multer({ storage: storage }));
};
