module.exports = function (dir, ext, callback) {
  var fs = require('fs')
  var path = require('path')

  ext = '.' + ext

  fs.readdir(dir, function(err, list){
    if (err) {
      return callback(err)
    } else {

      // console.log(list)
      var data = []

      for ( i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == ext) {
          data.push(list[i])
        }
      }
       
      // console.log(data)

      callback(null, data)
    }
  })
}
