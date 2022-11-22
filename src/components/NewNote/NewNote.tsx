import React from "react";
import "./NewNote.scss";
import { NoteForm } from "../NoteForm/NoteForm";

export const NewNote: React.FC<{}> = function () {
  return (
    <div className="form-div">
      <h1>New Note</h1>
      <NoteForm onSubmit={() => console.log("Paras")} />
    </div>
  );
};
