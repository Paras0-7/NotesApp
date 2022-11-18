import React from "react";
import "./NoteForm.scss";

export const NoteForm: React.FC<{}> = function () {
  return (
    <form className="form">
      <label>
        Title
        <input type="text" />
      </label>
      <label>
        Tags
        <select>
          <option value="Paras">Paras</option>
          <option value="Rahul">Rahul</option>
        </select>
      </label>
    </form>
  );
};
