import React, { useState } from "react";
import noteContext from "../context/notes.js/noteContext";
import { useContext } from "react";

function AddNote() {
  const context = useContext(noteContext);
  const [note, setNote] = useState({title: "", description: ""})
  const {  addNote } = context;

  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note);
  }
  
  const onChange = (e) =>{
    e.preventDefault();
    setNote({...note, [e.target.name]: [e.target.value]})
  }
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={onChange}
            class="form-control"
            id="description"
            name="description"
          />
        </div>
        <button type="submit" onClick={handleClick} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
