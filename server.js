import express from 'express'
import path from 'path'


const app = express()
const port = 1314

app.use(express.static(path.join(__dirname, 'dist'), {
  dotfiles: 'ignore', index: false
}));

// make every req serve the same index file
app.get('*', function(req, res, next){
  const indexFile = path.resolve(__dirname + '/dist', 'index.html')
  console.log('REQ::[GET]::', req.originalUrl)
  res.sendFile(indexFile)
})

// error handling
app.use(function(req, res, next){
  console.log(' [404] ');
  let err = new Error('URL NOT FOUND')
  err.status = 404
  next(err)
})


// server start here
app.listen(port)
console.log('Server Start at PORT::'+port);
