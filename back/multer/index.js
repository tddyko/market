const multer = require("multer");
const fs = require("fs");
fs.readdir("./public/images", (err, data) => {
  if (err) {
    fs.mkdirSync("./public/images");
  }
});

//이미지 파일 저장 관련 설정

module.exports = function (filepath) {
  fs.readdir(filepath, (err, data) => {
    if (err) fs.mkdirSync(filepath);
  });
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //cb(null, './public/images/');
      cb(null, filepath);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  });
  return (upload = multer({ storage: storage }));
};
