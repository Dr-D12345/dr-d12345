const express = require('express')

var app = express();
app.get('/', function (req, res) {
    res.sendFile('public/index.html', { root: __dirname })
});
app.use(express.static(__dirname + "/public", {
    immutable: true
}));

app.listen(3000, () => {


    console.log("Listening at localhost:3000")
})