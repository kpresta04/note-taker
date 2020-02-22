var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// db = JSON.parse(db);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Displays all notes
app.get("/api/notes", function(req, res) {
  //   var db = fs.readFile("./db/db.json", (err, data) => {
  //     if (err) throw err;
  //     // console.log(data);
  //   });
  res.sendFile(path.join(__dirname, "/db/db.json"));

  //   return res.json(db);
});

//Add new note
app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  //   newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

  //   console.log(newNote);

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    let dbArray = JSON.parse(data);
    // console.log(dbArray);
    if (dbArray.length > 0) {
      newNote.id = dbArray[dbArray.length - 1].id + 1;
    } else {
      newNote.id = 0;
    }
    dbArray.push(newNote);
    // console.log(dbArray);
    fs.writeFile("./db/db.json", JSON.stringify(dbArray), "utf8", err => {
      if (err) throw err;
      console.log("The data was saved to file!");
    });
  });
  res.end();
});

//Delete note

app.delete("/api/notes/:id", function(req, res) {
  var id = req.params.id;
  //   console.log(id);
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    let dbArray = JSON.parse(data);
    let delItem = dbArray.find(obj => obj.id == id);

    dbArray.pop(delItem);
    console.log(dbArray);
    fs.writeFile("./db/db.json", JSON.stringify(dbArray), "utf8", err => {
      if (err) throw err;
      console.log("The data was saved to file!");
    });
  });

  res.end();
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
