require('dotenv').config()
var base64ToImage = require('base64-to-image');

module.exports = {
    create: (data,callBack)=>{
        var base64Str = data.image;
        var path ='./public/images/';
        const imageName = Date.now() + '.png';
        var optionalObj = {'fileName': imageName, 'type':'png'};
        var imageInfo = base64ToImage(base64Str,path,optionalObj); 
        data.image =  '/images/' + imageInfo.fileName;
        return callBack(null,data);
    }
}