import React, { useState } from "react";
import NoteContext from "./noteContext";

function Notestate(props) {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  console.log(notes)

  // Fetch all note
  const getAllNote = async () => {
    console.log("addnote");
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        authtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTMxNWMyMjQ4NzcyNTg5NmU5ZGE0In0sImlhdCI6MTY4MTUzNTMyNH0.TIjFHc47U0JeEUxZtOLuu47-HdVz7Zb8e_WB-o1JLG4"
       },
    });

    const json = await response.json();
    console.log(json.title);
    setNotes(json);
  };
  //   Add a note
  const addNote = async (title, description) => {
    // console.log("Added")
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        authtoken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTMxNWMyMjQ4NzcyNTg5NmU5ZGE0In0sImlhdCI6MTY4MTUzNTMyNH0.TIjFHc47U0JeEUxZtOLuu47-HdVz7Zb8e_WB-o1JLG4"
       },

      body: JSON.stringify({ title, description }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    // ===========================================================================================================================================================
    const note = {
      _id: "64182be763adxdcfvgbhjnd0d354cee4c3",
      user: "63e750b240de56f91afe505c",
      title: "peirvgbhnj added",
      description: "vgbhjnkml added,",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = async (id) => {
    console.log("deletenote ");

    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        authtoken: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTMxNWMyMjQ4NzcyNTg5NmU5ZGE0In0sImlhdCI6MTY4MTUzNTMyNH0.TIjFHc47U0JeEUxZtOLuu47-HdVz7Zb8e_WB-o1JLG4"
        },
    });
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    console.log(newNote.length);
    setNotes(newNote);
  };

  // Edit a note
  const editNote = async (id, title, description) => {
    console.log("editnote");
    // API calls
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        authtoken: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYTMxNWMyMjQ4NzcyNTg5NmU5ZGE0In0sImlhdCI6MTY4MTUzNTMyNH0.TIjFHc47U0JeEUxZtOLuu47-HdVz7Zb8e_WB-o1JLG4"
        },

      body: JSON.stringify({ title, description }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    // Logic to edit
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id == id) {
        element.title = title;
        element.description = description;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, getAllNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

export default Notestate;
