const express = require("express")
app = express();
const sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(':memory:');
const port = 423;

app.use(express.static("./public"))

db.serialize(function() {
    db.run("CREATE TABLE class (name TEXT, desc TEXT)");
    db.run("CREATE TABLE survey (name TEXT, email TEXT)");
});

app.put("./api/newClassMember", (req, res) => {

})

app.put("./api/surveyEntry", (req, res) => {

})

app.listen(port, () => {
    console.log("app listening on port " + port);
})