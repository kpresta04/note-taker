# Express Note Taker

## Description

An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

- GET `/notes` - Should return the `notes.html` file.

- GET `*` - Should return the `index.html` file

- The following API routes have been created:

  - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
