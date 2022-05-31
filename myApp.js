let express = require('express');
let app = express();


let absolutePath = __dirname + "/views/index.html";

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

console.log('Hello World');
































module.exports = app;
