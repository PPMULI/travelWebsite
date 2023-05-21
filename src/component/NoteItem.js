import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import noteContext from "../context/notes.js/noteContext";
import { useContext } from "react";
function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const  {note} = props;
  // const handlelick = () =>{
    // deleteNote(note._id);
  // }
  return (
    <>
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.description}</h6>
          <EditIcon onClick={() => {editNote(note._id)}} />
          <DeleteIcon onClick={()=> {deleteNote(note._id)}} />
        </div>
      </div>
      </div>
    </>
  );
}

export default NoteItem;
