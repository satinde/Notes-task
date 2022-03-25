import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import UserDetail from "./UserDetail";
import NotesInput from './NotesInput'
const Notes = () => {
  const [notes, setNotes] = useState("");
  const [notesList, setNotesList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotesList([...notesList, { name: notes, id: uuidV4() }]);
    setNotes("");
  };
  const deleteNotes = (id) => {
    let delNotes = notesList.filter((res) => res.id !== id);
    setNotesList(delNotes);
  };
  return (
    <>
      <div class="container">
        <div class="h-100 d-flex justify-content-center align-items-center"
        style={{ marginTop: "100px" }}
        >
          <div className="shadow-lg d-flex">
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "skyblue" }}>
              <UserDetail />
            </div>
            <NotesInput 
            notes={notes}
            setNotes={setNotes}
            handleSubmit={handleSubmit}
            deleteNotes={deleteNotes}
            notesList={notesList}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Notes;
