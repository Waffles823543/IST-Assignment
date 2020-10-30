const express = require("express");
app = express();
var db = require("./database.js")
var bodyParser = require('body-parser');
const port = 423;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"))

app.get("/api/classMembers", (req, res) => {
    db.all("SELECT * FROM classMembers ORDER BY name", [], (err, rows) => {
        res.json(rows)
    })
})

app.put("/api/classMembers", (req, res) => {
    console.log(req.body.name, req.body.desc);
    let insert = 'INSERT INTO classMembers (name, desc) VALUES (?,?)'
    db.run(insert, [req.body.name, req.body.desc]);
    db.all("SELECT * FROM classMembers ORDER BY name", [], (err, rows) => {
        res.json(rows)
    })
})

app.delete("/api/classMembers", (req, res) => {
    console.log(req.body.name);
    let del = 'DELETE FROM classMembers WHERE name = ?';
    db.run(del, [req.body.name]);
    db.all("SELECT * FROM classMembers ORDER BY name", [], (err, rows) => {
        res.json(rows)
    })
})

app.listen(port, () => {
    console.log("app listening on port " + port);
})