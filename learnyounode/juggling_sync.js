var http = require('http'), 
    bl = require('bl'), 
    out = [],
    retrieved = 0

for(var i = 0; i < 3; i++) {
  (function(pos) {
    var url = process.argv[i+2]

    http.get(url, function(res) {
      res.pipe(bl(function(err, data) {
        if (err)
          return console.error(err)

        out[pos] = data.toString()
        retrieved++

        printAll()
      }))
    })
  }(i))
}

function printAll() {
  if ( retrieved == 3) {
    out.forEach(function(data) {
      console.log(data)
    })
  }
}