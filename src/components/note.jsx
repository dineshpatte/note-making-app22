import React, { useEffect, useState } from "react";
import {
  NotebookText,
  House,
  ChevronRight,
  Tag,
  Search,
  Settings,
  Trash,
} from "lucide-react";
import Sidebar from "./sidebar";

const tags = [
  "Cooking",
  "Education",
  "Fitness",
  "Health",
  "Personal",
  "Recipies",
  "Shopping",
  "Travel",
];
import Righttop from "./Righttop";
import Rightbottom from "./Rightbottom";

const initialNotes = [];

const Note = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNote, setNewNote] = useState({
    title: "",
    tags: "",
    content: "",
  });
  const [isCreating, setIsCreating] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [fileredNotesState, setFileteredNotesState] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const countTag = Object.fromEntries(
    tags.map((tag) => [
      tag,
      notes.filter((note) => note.tags.includes(tag)).length,
    ])
  );

  const filteredNotes = fileredNotesState.filter(
    (note) =>
      note.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchItem.toLowerCase())
      )
  );

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setFileteredNotesState(notes);
  }, [notes]);

  const handleCreateNote = () => {
    setIsCreating(true);
    setNewNote({ title: "", tags: "", content: "" });
  };

  const handleSaveNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const newNoteData = {
        id: notes.length + 1,
        title: newNote.title,
        tags: newNote.tags.split(",").map((tag) => tag.trim()),
        date: new Date().toLocaleDateString(),
        content: newNote.content,
      };
      setNotes([...notes, newNoteData]);
      setSelectedNote(newNoteData);
      setIsCreating(false);
      setSearchItem("");
    }
  };

  const handleCancel = () => {
    setIsCreating(false);
  };

  const handleDeleteNote = () => {
    if (selectedNote) {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete the Note ?"
      );

      if (confirmDelete) {
        setNotes(notes.filter((note) => note.id != selectedNote.id));
        setSelectedNote(null);
      }
    }
  };

  const tagclickDisplay = (clickedTag) => {
    setFileteredNotesState(
      notes.filter((note) => note.tags.includes(clickedTag))
    );
  };

  const displayAll = () => {
    setFileteredNotesState(notes);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex jusify-center items-center w-screen h-screen dark:bg-black bg-white relative ">
        {/*sidebar*/}
        <Sidebar
          displayAll={displayAll}
          tagclickDisplay={tagclickDisplay}
          countTag={countTag}
          tags={tags}
        />

        <div className="flex flex-col w-[85%]  h-full absolute right-0 ">
          {/*righttopbar*/}
          <Righttop
            setSearchItem={setSearchItem}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />

          {/*rightbottom1*/}
          <Rightbottom
            handleCreateNote={handleCreateNote}
            filteredNotes={filteredNotes}
            setSelectedNote={setSelectedNote}
            selectedNote={selectedNote}
            isCreating={isCreating}
            newNote={newNote}
            setNewNote={setNewNote}
            handleSaveNote={handleSaveNote}
            handleCancel={handleCancel}
            handleDeleteNote={handleDeleteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
