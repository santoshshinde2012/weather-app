let express = require('express');
let path = require('path');
let favicon =  require('serve-favicon');

let port = process.env.PORT || 8080;

let app = express();

app.use(express.static(__dirname));

app.use(favicon(path.join(__dirname, 'favicon.ico')));


app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'index.html'))
});

app.listen(port);

console.log("server stated on port ", port)
