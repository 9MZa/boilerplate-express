let express = require('express');
let app = express();


let absolutePath = __dirname + "/views/index.html";

app.use(express.static('public'));
app.use('/public', express.static('public'))

app.use((req, res, next) => {
  console.log("middleware");
  next();
})

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
});



app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

console.log('Hello World');
































module.exports = app;
