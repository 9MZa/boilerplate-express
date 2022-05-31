let express = require('express');
let app = express();


let absolutePath = __dirname + "/views/index.html";

app.use(express.static('public'));
app.use('/public', express.static('public'))

const Logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}

app.use(Logger)

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
  } else {
    res.json({ "message": "Hello json" })
  }
});

app.get('/now', (req, res, next) => {
  req.time = new Date();
  next()
}, (req, res) => {
  res.json({ "time": req.time })
})

app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({ "echo": word })
})

app.get('/name', (req, res) => {
  let { first: fistName, last: lastName } = req.query;
  res.json({ "name": `${fistName} ${lastName}` })
})

console.log('Hello World');
































module.exports = app;
