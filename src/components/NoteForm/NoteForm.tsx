import React from "react";
import "./NoteForm.scss";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { NoteData } from "../../types/NoteData";
import { Tag } from "../../types/Tag";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export const NoteForm: React.FC<NoteFormProps> = function ({ onSubmit }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [seletedTags, setSeletedTags] = useState<Tag[]>([]);

  const submitHandler = function (e: React.FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
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
          <CreatableReactSelect
            isMulti
            value={seletedTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
            onChange={(tags) => {
              setSeletedTags(
                tags.map((tag) => {
                  return { label: tag.label, id: tag.value };
                })
              );
            }}
          />
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
