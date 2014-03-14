var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
  parsed_url = url.parse(req.url, true)
  // console.log(parsed_url)

  if (parsed_url.pathname == '/api/parsetime')
    parseTime(parsed_url.query, res)
  else if (parsed_url.pathname == '/api/unixtime')
    unixTime(parsed_url.query, res)
})

server.listen(process.argv[2])

function parseTime(query, res) {
  iso = query.iso 

  var date = new Date(iso)
  // console.log(query)
  // console.log(date)
  res.writeHead(200, { 'Content-Type': 'application/json' })

  var json_obj = {}

  json_obj['hour'] = date.getHours()
  json_obj['minute'] = date.getMinutes()
  json_obj['second'] = date.getSeconds()

  res.end(JSON.stringify(json_obj))
}

function unixTime(query, res) {
  iso = query.iso 

  var date = new Date(iso)
 
  res.writeHead(200, { 'Content-Type': 'application/json' })

  var json_obj = {}

  json_obj['unixtime'] = date.getTime()

  res.end(JSON.stringify(json_obj))
}
