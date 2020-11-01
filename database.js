var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

initialPeople = [{
        name: "Rafael Deubler",
        desc: 'Can code it\'s funky'
    },
    {
        name: "Sam Dunn",
        desc: 'sam, just sam'
    },
    {
        name: "Samuel Ezra",
        desc: 'doesn\'t have a foil'
    },
    {
        name: "Dror Liraz",
        desc: 'she speaks hebrew, and trys hard at english'
    },
    {
        name: "Nathan Tietzel-Berry",
        desc: 'short'
    },
    {
        name: "Alonzo Navaro",
        desc: 'whistles'
    },
    {
        name: "Alex Toot",
        desc: '[redacted]'
    },
    {
        name: "Zara Joseph",
        desc: 'try hard'
    },
    {
        name: "Colin Wu",
        desc: 'smart'
    },
    {
        name: "Brian Wu",
        desc: 'Colin\'s twin'
    },
    {
        name: "Lam Ngyuen",
        desc: 'Lam'
    },
    {
        name: "DJwayne Quintana",
        desc: 'He\' pretty cool'
    },
    {
        name: "Jake Podesta",
        desc: 'sus'
    },
    {
        name: "Shaan Daly",
        desc: 'like cricket I think'
    },
    {
        name: "Jordan Bennet",
        desc: 'Like soccer or cricket idk'
    },
    {
        name: "Jackson Day",
        desc: 'I think he type kinda fast'
    },
    {
        name: "Jet Nathan",
        desc: 'Nazi'
    },
    {
        name: "Feliks Wilkinson",
        desc: 'has $$$'
    },
    {
        name: "Jindrich Stebetak",
        desc: 'plays some game that has a ball'
    },
    {
        name: "Tamzid Hossain",
        desc: 'oporto'
    },
    {
        name: "Anuj Rai",
        desc: 'Kerry calls him Amy for some reason'
    },
    {
        name: "Carlos Calderon",
        desc: 'Caaaaaaaarl'
    },
    {
        name: "Etai Sofer",
        desc: 'Quiet'
    },
    {
        name: "Mark Andres",
        desc: 'Eshay'
    },
]

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run("DROP TABLE classMembers", (err) => {
            console.log(err)
            db.run(`CREATE TABLE classMembers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text, 
                desc text
            )`,
                (err) => {
                    // console.log(err);
                    if (err) {
                        // Table already created
                        console.log("Already Exists");
                    }else{
                        // Table just created, creating some rows
                        console.log("class table created")
                        var insert = 'INSERT INTO classMembers (name, desc) VALUES (?,?)'
                        for(person of initialPeople){
                            db.run(insert, [person.name, person.desc])
                        }
                    }
            });
        })

        db.run("DROP TABLE survey", (err) => {
            console.log(err)
            db.run(`CREATE TABLE survey (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                FName text, 
                LName text, 
                Age integer, 
                Question4 text,
            )`,
                (err) => {
                    // console.log(err);
                    if (err) {
                        // Table already created
                        console.log("Already Exists");
                    }else{
                        console.log("survey table created")
                    }
            });
        })
    }
});

module.exports = db