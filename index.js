const express = require('express')

var app = express();
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname })
});
app.use(express.static(__dirname + "/", {
    immutable: true
}));

app.listen(3000, () => {


    console.log("Listening at localhost:3000")
})