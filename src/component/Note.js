import React, { useEffect } from "react";
import Notes from "./Notes";
function Note() {

  return (
    <>
      <div className="container">
       <h2>Your notes</h2>
      <div className="row">
        <Notes />
      </div>
      </div>
    </>
  );
}

export default Note;
