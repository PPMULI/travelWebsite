import React, { useEffect } from "react";
import noteContext from "../context/notes.js/noteContext";
import { useContext } from "react";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNote, json1 } = context;

  useEffect(() => {
    getAllNote()
    console.log(json1)
  }, [])
  return (
    <>
      <AddNote />

      <div className="row">
        {notes && notes.map((note) => {
          return <NoteItem note={note} />;
          // return note.title;
        })}
      </div>
    </>
  );
}

export default Notes;
