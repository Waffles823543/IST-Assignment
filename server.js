const express = require("express")
app = express();
var db = require("./database.js")
const port = 423;

// app.use(express.static("./public"))

app.put("./api/classMember", (req, res) => {

})

app.get("/", (req, res) => {
    db.all('SELECT * FROM classMember', [], (err, rows) => {
        console.log(rows)
        res.json({
            "message": "success",
            "data": rows
        })
    })
})

app.get("./api/classMember", (req, res) => {
    console.log("get")
    db.all('SELECT * FROM classMember', [], (err, rows) => {
        console.log(rows)
        res.json({
            "message": "success",
            "data":rows
        })
    })
})

app.put("./api/surveyEntry", (req, res) => {

})

app.listen(port, () => {
    console.log("app listening on port " + port);
})