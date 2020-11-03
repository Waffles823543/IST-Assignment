var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

initialPeople = [{
        name: "Rafael Deubler",
        desc: 'Can code it\'s funky'
    },
    {
        name: "Sam Dunn",
        desc: 'Is epic'
    },
    {
        name: "Samuel Ezra",
        desc: 'Sails'
    },
    {
        name: "Dror Liraz",
        desc: 'Hoarder of books'
    },
    {
        name: "Nathan Tietzel-Berry",
        desc: 'His dad is in the navy'
    },
    {
        name: "Alonzo Navaro",
        desc: 'Slick Hair'
    },
    {
        name: "Colin Wu",
        desc: 'Smart'
    },
    {
        name: "Brian Wu",
        desc: 'Colin\'s twin'
    },
    {
        name: "Lam Ngyuen",
        desc: 'Epic'
    },
    {
        name: "DJwayne Quintana",
        desc: 'He\'s pretty cool'
    },
    {
        name: "Shaan Daly",
        desc: 'likes cricket, he is a self aclaimed cool dude'
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
        name: "Feliks Wilkinson",
        desc: 'Daze One'
    },
    {
        name: "Tamzid Hossain",
        desc: 'Bringer of the Oporto'
    },
    {
        name: "Anuj Rai",
        desc: 'Kerry calls him Amy for some reason'
    }
]

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run("DROP TABLE classMembers", (err) => {
            console.log("err: " + err)
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
            console.log("err: " + err)
            db.run(`CREATE TABLE survey (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                FName text, 
                LName text, 
                Age integer, 
                Taught text,
                Change text,
                Proficiency text
            )`,
                (err) => {
                    // console.log(err);
                    if (err) {
                        // Table already created
                        console.log("Already Exists");
                    }else{
                        console.log("survey table created")
                        db.run('INSERT INTO survey (FName, LName, Age) VALUES ("Joe", "Blogs", 12)')
                    }
            });
        })
    }
});

module.exports = db