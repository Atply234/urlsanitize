var http = require('http');
var url = require('url')
var exp = require("express");
var bodyParser = require('body-parser');
const app = exp();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8001
app.set('view engine','ejs')

app.get('/', (req , res ) => {

  res.sendFile(__dirname + '/index.html');

})

app.get('/sani', (req , res ) => {

  res.sendFile(__dirname + '/sani.html');
  
})

app.post('/', (req,res) => {
  console.log(req.body.url)
  var uri = req.body.url;
  var tt = uri.split(/(\/)/);
  var te = tt[4];
  var ht = tt[0];
  ht = ht.replace(/t/g,'x');
  tt[0]=ht;
  var ttt = te.replace(/\./g, "[.]");
  tt[4] = ttt;
  console.log(ttt);
  var final = tt.join("");
  res.render('templ', {uri : final});
})

app.listen(port, function() {
  console.log('Server listening on http://localhost:' + port);
 });
