import React from "react";

import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./components/NewNote/NewNote";
import { RawNote } from "./types/RawNote";
import { Tag } from "./types/Tag";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
