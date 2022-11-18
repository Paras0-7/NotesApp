import React from "react";
import { NoteForm } from "../NoteForm/NoteForm";

export const NewNote: React.FC<{}> = function () {
  return (
    <>
      <h1>New Note</h1>
      <NoteForm />
    </>
  );
};
