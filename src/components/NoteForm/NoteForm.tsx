import React from "react";
import "./NoteForm.scss";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const NoteForm: React.FC<{}> = function () {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = function (e: React.FormEvent) {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-details">
        <label htmlFor="title">
          Title
          <input ref={titleRef} type="text" id="title" />
        </label>
        <label htmlFor="tags">
          Tags
          <CreatableReactSelect isMulti />
        </label>
      </div>
      <div className="form-body">
        <label htmlFor="body">
          Body
          <textarea ref={markdownRef} id="body" />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary">
          Save
        </button>
        <Link to="..">
          {" "}
          <button type="button" className="secondary">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};
