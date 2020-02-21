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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
